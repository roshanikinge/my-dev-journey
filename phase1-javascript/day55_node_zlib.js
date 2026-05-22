// Day 55: Node.js Zlib Module

const zlib = require("zlib");
const fs = require("fs");

console.log("1. BASIC COMPRESSION (gzip)");

const input = "Hello World! ".repeat(100);
console.log("Original size:", Buffer.byteLength(input), "bytes");

zlib.gzip(input, (err, compressed) => {
    if (err) console.error(err);
    else {
        console.log("Compressed size (gzip):", compressed.length, "bytes");
        console.log("Compression ratio:", ((compressed.length / Buffer.byteLength(input)) * 100).toFixed(2) + "%");
        
        zlib.gunzip(compressed, (err, decompressed) => {
            if (err) console.error(err);
            else {
                const decompressedStr = decompressed.toString();
                console.log("Decompressed successfully:", decompressedStr === input);
            }
        });
    }
});

console.log("\n2. SYNCHRONOUS COMPRESSION");

const syncInput = "Node.js Zlib Module Test ".repeat(50);
const originalSize = Buffer.byteLength(syncInput);

const compressedSync = zlib.gzipSync(syncInput);
const decompressedSync = zlib.gunzipSync(compressedSync);

console.log("Original size:", originalSize, "bytes");
console.log("Compressed size:", compressedSync.length, "bytes");
console.log("Decompressed matches:", decompressedSync.toString() === syncInput);

console.log("\n3. DEFLATE COMPRESSION");

const deflateInput = "This is text to compress using deflate algorithm. ".repeat(20);

zlib.deflate(deflateInput, (err, compressed) => {
    if (err) console.error(err);
    else {
        console.log("Deflate compressed size:", compressed.length, "bytes");
        
        zlib.inflate(compressed, (err, decompressed) => {
            if (err) console.error(err);
            else {
                console.log("Inflate decompressed matches:", decompressed.toString() === deflateInput);
            }
        });
    }
});

console.log("\n4. BROTLI COMPRESSION (better ratio)");

const brotliInput = "Text for Brotli compression algorithm testing. ".repeat(30);

zlib.brotliCompress(brotliInput, (err, compressed) => {
    if (err) console.error(err);
    else {
        console.log("Brotli compressed size:", compressed.length, "bytes");
        
        zlib.brotliDecompress(compressed, (err, decompressed) => {
            if (err) console.error(err);
            else {
                console.log("Brotli decompressed matches:", decompressed.toString() === brotliInput);
            }
        });
    }
});

console.log("\n5. COMPRESSION LEVELS");

const levelTestData = "Test data for compression levels ".repeat(50);

for (let level = 1; level <= 9; level++) {
    const compressed = zlib.gzipSync(levelTestData, { level: level });
    const ratio = ((compressed.length / Buffer.byteLength(levelTestData)) * 100).toFixed(2);
    console.log(`Level ${level}: ${compressed.length} bytes (${ratio}%)`);
}

console.log("\n6. FILE COMPRESSION EXAMPLE");

const testFileContent = "This is test file content\nLine 2\nLine 3\n".repeat(100);
const testFileName = "test_uncompressed.txt";
const compressedFileName = "test_compressed.gz";

fs.writeFileSync(testFileName, testFileContent);
console.log(`Created file: ${testFileName} (${fs.statSync(testFileName).size} bytes)`);

const readStream = fs.createReadStream(testFileName);
const writeStream = fs.createWriteStream(compressedFileName);
const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);

writeStream.on("finish", () => {
    console.log(`Compressed file: ${compressedFileName} (${fs.statSync(compressedFileName).size} bytes)`);
    
    const decompressedName = "test_decompressed.txt";
    const readCompressed = fs.createReadStream(compressedFileName);
    const writeDecompressed = fs.createWriteStream(decompressedName);
    const gunzip = zlib.createGunzip();
    
    readCompressed.pipe(gunzip).pipe(writeDecompressed);
    
    writeDecompressed.on("finish", () => {
        console.log(`Decompressed file: ${decompressedName} (${fs.statSync(decompressedName).size} bytes)`);
        
        const original = fs.readFileSync(testFileName, "utf8");
        const decompressed = fs.readFileSync(decompressedName, "utf8");
        console.log("Decompression matches:", original === decompressed);
        
        fs.unlinkSync(testFileName);
        fs.unlinkSync(compressedFileName);
        fs.unlinkSync(decompressedName);
        console.log("Cleanup complete");
    });
});

console.log("\n7. COMPRESSION STRATEGIES");

const htmlContent = "<html><body><h1>Hello World</h1><p>This is HTML content</p></body></html>".repeat(20);
const defaultCompressed = zlib.gzipSync(htmlContent);
const filteredCompressed = zlib.gzipSync(htmlContent, { strategy: zlib.constants.Z_FILTERED });

console.log("Default strategy size:", defaultCompressed.length, "bytes");
console.log("Filtered strategy size:", filteredCompressed.length, "bytes");

console.log("\n8. CHUNKED COMPRESSION");

function compressInChunks(data, chunkSize = 1024) {
    const chunks = [];
    for (let i = 0; i < data.length; i += chunkSize) {
        chunks.push(data.slice(i, i + chunkSize));
    }
    
    const compressor = zlib.createGzip();
    const compressedChunks = [];
    
    compressor.on("data", (chunk) => compressedChunks.push(chunk));
    compressor.on("end", () => {
        const totalCompressed = Buffer.concat(compressedChunks);
        console.log(`Chunked compression - Original: ${data.length} bytes, Compressed: ${totalCompressed.length} bytes`);
    });
    
    chunks.forEach(chunk => compressor.write(chunk));
    compressor.end();
}

const largeData = "Large text data for chunked compression testing. ".repeat(200);
compressInChunks(largeData);

console.log("\n9. PRACTICE TASKS");

function compressString(str, encoding = "base64") {
    const compressed = zlib.gzipSync(str);
    return encoding === "base64" ? compressed.toString("base64") : compressed.toString("hex");
}

function decompressString(compressedStr, encoding = "base64") {
    const buffer = encoding === "base64" ? Buffer.from(compressedStr, "base64") : Buffer.from(compressedStr, "hex");
    return zlib.gunzipSync(buffer).toString();
}

const originalText = "This is a secret message that needs to be compressed before sending over network. ".repeat(5);
const compressedBase64 = compressString(originalText);
const decompressedText = decompressString(compressedBase64);

console.log("Original length:", originalText.length);
console.log("Compressed Base64 length:", compressedBase64.length);
console.log("Decompression successful:", originalText === decompressedText);

function compareAlgorithms(data) {
    const algorithms = [
        { name: "gzip", compress: () => zlib.gzipSync(data) },
        { name: "deflate", compress: () => zlib.deflateSync(data) },
        { name: "brotli", compress: () => zlib.brotliCompressSync(data) }
    ];
    
    console.log(`\nComparison for ${data.length} bytes:`);
    algorithms.forEach(algo => {
        const compressed = algo.compress();
        const ratio = ((compressed.length / data.length) * 100).toFixed(2);
        console.log(`  ${algo.name}: ${compressed.length} bytes (${ratio}%)`);
    });
}

compareAlgorithms("Small text".repeat(10));
compareAlgorithms("This is a longer text string for testing compression algorithms performance. ".repeat(50));

function getCompressionStats(input) {
    const originalSize = Buffer.byteLength(input);
    const gzipSize = zlib.gzipSync(input).length;
    const deflateSize = zlib.deflateSync(input).length;
    const brotliSize = zlib.brotliCompressSync(input).length;
    
    return {
        original: originalSize,
        gzip: gzipSize,
        deflate: deflateSize,
        brotli: brotliSize,
        best: Math.min(gzipSize, deflateSize, brotliSize) === brotliSize ? "brotli" : 
               Math.min(gzipSize, deflateSize, brotliSize) === gzipSize ? "gzip" : "deflate"
    };
}

const testData = "Test compression ".repeat(100);
console.log("Compression stats:", getCompressionStats(testData));

console.log("\nDay 55 completed - Zlib module covered.");