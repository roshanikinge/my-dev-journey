// Day 59: Node.js Worker Threads

const { Worker, isMainThread, parentPort, workerData, threadId } = require("worker_threads");
const os = require("os");

console.log("1. WORKER THREADS BASICS");

console.log(`Main thread ID: ${threadId}`);
console.log(`Is main thread: ${isMainThread}`);
console.log(`CPU cores: ${os.cpus().length}`);

if (isMainThread) {
    console.log("\n2. CREATING WORKER");
    
    const worker = new Worker(__filename, {
        workerData: { message: "Hello from main", startValue: 10 }
    });
    
    worker.on("message", (msg) => {
        console.log(`Main received from worker:`, msg);
    });
    
    worker.on("error", (err) => {
        console.error("Worker error:", err);
    });
    
    worker.on("exit", (code) => {
        console.log(`Worker exited with code ${code}`);
    });
    
    setTimeout(() => {
        worker.postMessage({ command: "calculate", value: 25 });
    }, 2000);
    
    setTimeout(() => {
        worker.postMessage({ command: "stop" });
    }, 5000);
    
} else {
    console.log(`Worker thread ${threadId} started`);
    console.log(`Received workerData:`, workerData);
    
    parentPort.postMessage({ status: "ready", workerId: threadId, data: workerData });
    
    let running = true;
    
    parentPort.on("message", (msg) => {
        console.log(`Worker ${threadId} received:`, msg);
        
        if (msg.command === "calculate") {
            let result = 0;
            for (let i = 0; i < msg.value * 1000000; i++) {
                result += i;
            }
            parentPort.postMessage({ command: "result", value: result, workerId: threadId });
        }
        
        if (msg.command === "stop") {
            running = false;
            parentPort.postMessage({ status: "stopping", workerId: threadId });
            process.exit(0);
        }
    });
    
    let counter = 0;
    const interval = setInterval(() => {
        if (running) {
            parentPort.postMessage({ type: "heartbeat", count: counter++, workerId: threadId });
        }
    }, 1000);
    
    setTimeout(() => clearInterval(interval), 8000);
}

console.log("\n3. MULTIPLE WORKERS");

if (isMainThread) {
    const workers = [];
    const workerCount = 4;
    
    for (let i = 0; i < workerCount; i++) {
        const worker = new Worker(__filename, {
            workerData: { workerId: i, startValue: i * 100 }
        });
        
        worker.on("message", (msg) => {
            console.log(`Main received from worker ${i}:`, msg);
        });
        
        workers.push(worker);
    }
    
    setTimeout(() => {
        workers.forEach((worker, idx) => {
            worker.postMessage({ command: "task", taskId: idx, data: `Task for worker ${idx}` });
        });
    }, 3000);
    
    setTimeout(() => {
        workers.forEach(worker => worker.terminate());
    }, 10000);
}

console.log("\n4. SHARED ARRAY BUFFER");

if (isMainThread) {
    const sharedBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
    const sharedArray = new Int32Array(sharedBuffer);
    sharedArray[0] = 0;
    sharedArray[1] = 100;
    sharedArray[2] = 200;
    sharedArray[3] = 300;
    
    console.log("Shared buffer created:", sharedArray);
    
    const worker1 = new Worker(__filename, { workerData: { sharedBuffer, workerRole: "reader" } });
    const worker2 = new Worker(__filename, { workerData: { sharedBuffer, workerRole: "writer" } });
    
    setTimeout(() => {
        worker1.terminate();
        worker2.terminate();
    }, 5000);
}

console.log("\n5. TRANSFERABLE OBJECTS");

if (isMainThread) {
    const largeArray = new Array(1000000).fill("data");
    console.log(`Large array size: ${largeArray.length} elements`);
    
    const worker = new Worker(__filename, { workerData: { processArray: true } });
    
    worker.on("message", (msg) => {
        if (msg.type === "processed") {
            console.log(`Processed result length: ${msg.result.length}`);
        }
    });
    
    worker.postMessage({ type: "data", data: largeArray });
    
    setTimeout(() => worker.terminate(), 3000);
}

console.log("\n6. WORKER POOL");

class WorkerPool {
    constructor(workerFile, poolSize) {
        this.workerFile = workerFile;
        this.poolSize = poolSize;
        this.workers = [];
        this.taskQueue = [];
        this.availableWorkers = [];
        
        this.init();
    }
    
    init() {
        for (let i = 0; i < this.poolSize; i++) {
            const worker = new Worker(this.workerFile);
            worker.id = i;
            worker.isAvailable = true;
            
            worker.on("message", (result) => {
                if (worker.callback) {
                    worker.callback(result);
                    worker.callback = null;
                }
                worker.isAvailable = true;
                this.availableWorkers.push(worker);
                this.processQueue();
            });
            
            this.workers.push(worker);
            this.availableWorkers.push(worker);
        }
    }
    
    processQueue() {
        if (this.taskQueue.length === 0 || this.availableWorkers.length === 0) return;
        
        const task = this.taskQueue.shift();
        const worker = this.availableWorkers.shift();
        worker.isAvailable = false;
        worker.callback = task.callback;
        worker.postMessage(task.data);
    }
    
    execute(data, callback) {
        this.taskQueue.push({ data, callback });
        this.processQueue();
    }
    
    terminate() {
        this.workers.forEach(worker => worker.terminate());
    }
}

if (isMainThread) {
    const pool = new WorkerPool(__filename, 3);
    
    for (let i = 0; i < 10; i++) {
        pool.execute({ taskId: i, value: i * 100 }, (result) => {
            console.log(`Task ${i} completed with result:`, result);
        });
    }
    
    setTimeout(() => pool.terminate(), 5000);
}

console.log("\n7. ERROR HANDLING");

if (isMainThread) {
    const errorWorker = new Worker(__filename, { workerData: { causeError: true } });
    
    errorWorker.on("error", (err) => {
        console.log("Caught worker error:", err.message);
    });
    
    errorWorker.on("exit", (code) => {
        console.log(`Error worker exited with code ${code}`);
    });
}

console.log("\n8. PRACTICE TASKS");

function runCPUIntensiveTaskInWorker(taskData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, { workerData: { intensiveTask: true, taskData } });
        
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
            if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}

async function testIntensiveTask() {
    try {
        const result = await runCPUIntensiveTaskInWorker({ iterations: 10000000 });
        console.log("Intensive task result:", result);
    } catch (err) {
        console.error("Intensive task failed:", err);
    }
}
testIntensiveTask();

function createWorkerForTask(taskFunction) {
    const workerCode = `
        const { parentPort } = require("worker_threads");
        const task = ${taskFunction.toString()};
        
        parentPort.on("message", async (data) => {
            try {
                const result = await task(data);
                parentPort.postMessage({ success: true, result });
            } catch (error) {
                parentPort.postMessage({ success: false, error: error.message });
            }
        });
    `;
    
    const worker = new Worker(workerCode, { eval: true });
    return worker;
}

const fibonacciWorker = createWorkerForTask((n) => {
    if (n <= 1) return n;
    return fibonacciWorker(n - 1) + fibonacciWorker(n - 2);
});

fibonacciWorker.on("message", (msg) => {
    if (msg.success) {
        console.log("Fibonacci result:", msg.result);
    }
    fibonacciWorker.terminate();
});

fibonacciWorker.postMessage(10);

console.log("\nDay 59 completed - Worker Threads module covered.");