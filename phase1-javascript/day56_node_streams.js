// Day 56: Node.js Streams

const fs = require("fs");
const stream = require("stream");
const { pipeline } = require("stream/promises");

console.log("1. READABLE STREAMS");

const readableStream = fs.createReadStream(__filename, { encoding: "utf8", highWaterMark: 1024 });

let chunks = 0;
readableStream.on("data", (chunk) => {
    chunks++;
    console.log(`Received chunk ${chunks} (${chunk.length} bytes)`);
});

readableStream.on("end", () => {
    console.log(`Finished reading. Total chunks: ${chunks}`);
});

readableStream.on("error", (err) => {
    console.error("Stream error:", err.message);
});

console.log("\n2. WRITABLE STREAMS");

const writableStream = fs.createWriteStream("stream_output.txt");
writableStream.write("First line\n");
writableStream.write("Second line\n");
writableStream.write("Third line\n");
writableStream.end("Final line\n");

writableStream.on("finish", () => {
    console.log("Write stream finished");
    fs.readFile("stream_output.txt", "utf8", (err, data) => {
        if (!err) console.log("Written content:\n", data);
        fs.unlinkSync("stream_output.txt");
    });
});

console.log("\n3. PIPE (Read to Write)");

const sourcePipe = fs.createReadStream(__filename);
const destPipe = fs.createWriteStream("piped_output.txt");

sourcePipe.pipe(destPipe);
destPipe.on("finish", () => {
    console.log("Pipe completed");
    fs.stat("piped_output.txt", (err, stats) => {
        console.log("Piped file size:", stats.size, "bytes");
        fs.unlinkSync("piped_output.txt");
    });
});

console.log("\n4. TRANSFORM STREAMS");

const { Transform } = stream;

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

const sourceTransform = fs.createReadStream(__filename, { encoding: "utf8" });
const destTransform = fs.createWriteStream("uppercase_output.txt");

sourceTransform.pipe(upperCaseTransform).pipe(destTransform);
destTransform.on("finish", () => {
    console.log("Transform stream (uppercase) completed");
    fs.unlinkSync("uppercase_output.txt");
});

console.log("\n5. CUSTOM TRANSFORM STREAM");

class WordCounter extends Transform {
    constructor() {
        super();
        this.wordCount = 0;
    }
    
    _transform(chunk, encoding, callback) {
        const text = chunk.toString();
        const words = text.split(/\s+/).filter(w => w.length > 0);
        this.wordCount += words.length;
        this.push(chunk);
        callback();
    }
    
    _flush(callback) {
        console.log(`Total word count: ${this.wordCount}`);
        callback();
    }
}

const counterStream = new WordCounter();
const readCounter = fs.createReadStream(__filename, { encoding: "utf8" });
const writeCounter = fs.createWriteStream("counter_output.txt");

readCounter.pipe(counterStream).pipe(writeCounter);
writeCounter.on("finish", () => {
    console.log("Word counter stream completed");
    fs.unlinkSync("counter_output.txt");
});

console.log("\n6. DUPLEX STREAMS");

const { Duplex } = stream;

const duplexStream = new Duplex({
    read(size) {
        this.push("Data from duplex\n");
        this.push(null);
    },
    write(chunk, encoding, callback) {
        console.log("Duplex received:", chunk.toString().trim());
        callback();
    }
});

duplexStream.on("data", (chunk) => {
    console.log("Duplex emitted:", chunk.toString().trim());
});

duplexStream.write("Hello Duplex");
duplexStream.end();

console.log("\n7. STREAM EVENTS");

const eventStream = fs.createReadStream(__filename, { encoding: "utf8", highWaterMark: 256 });

eventStream.on("open", () => console.log("Stream opened"));
eventStream.on("ready", () => console.log("Stream ready"));
eventStream.on("data", (chunk) => console.log(`Data event: ${chunk.length} bytes`));
eventStream.on("pause", () => console.log("Stream paused"));
eventStream.on("resume", () => console.log("Stream resumed"));
eventStream.on("end", () => console.log("Stream ended"));
eventStream.on("close", () => console.log("Stream closed"));

setTimeout(() => {
    eventStream.pause();
    setTimeout(() => eventStream.resume(), 500);
}, 100);

console.log("\n8. BACKPRESSURE HANDLING");

function createSlowWritable() {
    return new stream.Writable({
        write(chunk, encoding, callback) {
            setTimeout(() => {
                console.log(`Processed: ${chunk.length} bytes`);
                callback();
            }, 100);
        }
    });
}

const fastReadable = fs.createReadStream(__filename, { highWaterMark: 1024 });
const slowWritable = createSlowWritable();

fastReadable.on("data", (chunk) => {
    const canWrite = slowWritable.write(chunk);
    if (!canWrite) {
        console.log("Backpressure detected, pausing...");
        fastReadable.pause();
        slowWritable.once("drain", () => {
            console.log("Drained, resuming...");
            fastReadable.resume();
        });
    }
});

fastReadable.on("end", () => slowWritable.end());

console.log("\n9. PIPELINE (Error handling)");

async function runPipeline() {
    try {
        const source = fs.createReadStream(__filename);
        const transform = new Transform({
            transform(chunk, enc, cb) {
                this.push(chunk.toString().toUpperCase());
                cb();
            }
        });
        const destination = fs.createWriteStream("pipeline_output.txt");
        
        await pipeline(source, transform, destination);
        console.log("Pipeline completed successfully");
        fs.unlinkSync("pipeline_output.txt");
    } catch (err) {
        console.error("Pipeline failed:", err.message);
    }
}
runPipeline();

console.log("\n10. PRACTICE TASKS");

class LineSplitter extends Transform {
    constructor() {
        super();
        this.buffer = "";
    }
    
    _transform(chunk, encoding, callback) {
        this.buffer += chunk.toString();
        const lines = this.buffer.split("\n");
        this.buffer = lines.pop();
        
        lines.forEach(line => {
            this.push(line + "\n");
        });
        callback();
    }
    
    _flush(callback) {
        if (this.buffer) {
            this.push(this.buffer);
        }
        callback();
    }
}

const splitter = new LineSplitter();
const readSplit = fs.createReadStream(__filename, { encoding: "utf8" });
let lineCount = 0;

readSplit.pipe(splitter).on("data", () => lineCount++);
readSplit.on("end", () => console.log(`File has approximately ${lineCount} lines`));

function createThrottledStream(bytesPerSecond) {
    return new Transform({
        transform(chunk, encoding, callback) {
            setTimeout(() => {
                this.push(chunk);
                callback();
            }, (chunk.length / bytesPerSecond) * 1000);
        }
    });
}

const throttled = createThrottledStream(1024);
const readThrottle = fs.createReadStream(__filename);
const writeThrottle = fs.createWriteStream("throttled_output.txt");
const startTime = Date.now();

readThrottle.pipe(throttled).pipe(writeThrottle);
writeThrottle.on("finish", () => {
    const duration = (Date.now() - startTime) / 1000;
    console.log(`Throttled stream took ${duration.toFixed(2)} seconds`);
    fs.unlinkSync("throttled_output.txt");
});

console.log("\nDay 56 completed - Streams module covered.");