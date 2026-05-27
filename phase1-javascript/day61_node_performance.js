// Day 61: Node.js Performance Optimization

const { performance, PerformanceObserver } = require("perf_hooks");
const fs = require("fs");
const crypto = require("crypto");

console.log("1. PERFORMANCE TIMING");

const start = performance.now();

for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
}

const end = performance.now();
console.log(`Operation took ${(end - start).toFixed(2)}ms`);

console.log("\n2. PERFORMANCE MARKS");

performance.mark("start-task");
setTimeout(() => {
    performance.mark("end-task");
    performance.measure("Task Duration", "start-task", "end-task");
    const measures = performance.getEntriesByType("measure");
    console.log("Task duration:", measures[measures.length - 1].duration.toFixed(2), "ms");
}, 100);

console.log("\n3. PERFORMANCE OBSERVER");

const obs = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach(entry => {
        console.log(`  ${entry.name}: ${entry.duration.toFixed(2)}ms`);
    });
});
obs.observe({ entryTypes: ["measure"] });

setTimeout(() => {
    performance.mark("A");
    setTimeout(() => {
        performance.mark("B");
        performance.measure("Async Op", "A", "B");
    }, 50);
}, 200);

console.log("\n4. MEMORY USAGE");

function logMemoryUsage() {
    const memory = process.memoryUsage();
    console.log(`  RSS: ${(memory.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Heap Total: ${(memory.heapTotal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Heap Used: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  External: ${(memory.external / 1024 / 1024).toFixed(2)} MB`);
}
logMemoryUsage();

console.log("\n5. MEMORY LEAK DETECTION");

let leakArray = [];
let leakDetected = false;

function simulateLeak() {
    for (let i = 0; i < 1000; i++) {
        leakArray.push({ id: i, data: "x".repeat(1000) });
    }
    
    const memory = process.memoryUsage();
    const heapUsedMB = memory.heapUsed / 1024 / 1024;
    
    if (heapUsedMB > 100 && !leakDetected) {
        console.log(`  Potential memory leak detected: ${heapUsedMB.toFixed(2)} MB`);
        leakDetected = true;
    }
}

simulateLeak();

function cleanup() {
    leakArray = [];
    console.log("  Cleaned up memory");
}
cleanup();

console.log("\n6. STREAM VS BUFFER (Memory efficiency)");

function bufferApproach() {
    const start = performance.now();
    const data = fs.readFileSync(__filename);
    const lines = data.toString().split("\n");
    console.log(`  Buffer approach: ${lines.length} lines, ${(performance.now() - start).toFixed(2)}ms`);
}

function streamApproach() {
    const start = performance.now();
    let lineCount = 0;
    const stream = fs.createReadStream(__filename, { encoding: "utf8" });
    
    stream.on("data", (chunk) => {
        lineCount += chunk.split("\n").length;
    });
    
    stream.on("end", () => {
        console.log(`  Stream approach: ${lineCount} lines, ${(performance.now() - start).toFixed(2)}ms`);
    });
}
bufferApproach();
streamApproach();

console.log("\n7. CRYPTO PERFORMANCE");

function compareCryptoAlgorithms() {
    const data = "test data".repeat(1000);
    
    const startMd5 = performance.now();
    crypto.createHash("md5").update(data).digest("hex");
    console.log(`  MD5: ${(performance.now() - startMd5).toFixed(3)}ms`);
    
    const startSha256 = performance.now();
    crypto.createHash("sha256").update(data).digest("hex");
    console.log(`  SHA256: ${(performance.now() - startSha256).toFixed(3)}ms`);
    
    const startSha512 = performance.now();
    crypto.createHash("sha512").update(data).digest("hex");
    console.log(`  SHA512: ${(performance.now() - startSha512).tofixed(3)}ms`);
}
compareCryptoAlgorithms();

console.log("\n8. LOOP OPTIMIZATIONS");

const largeArray = Array.from({ length: 1000000 }, (_, i) => i);

function testLoopPerformance() {
    let sum = 0;
    
    const startFor = performance.now();
    for (let i = 0; i < largeArray.length; i++) {
        sum += largeArray[i];
    }
    console.log(`  for loop: ${(performance.now() - startFor).toFixed(2)}ms`);
    
    sum = 0;
    const startForOf = performance.now();
    for (const num of largeArray) {
        sum += num;
    }
    console.log(`  for...of: ${(performance.now() - startForOf).toFixed(2)}ms`);
    
    sum = 0;
    const startForEach = performance.now();
    largeArray.forEach(num => sum += num);
    console.log(`  forEach: ${(performance.now() - startForEach).toFixed(2)}ms`);
    
    const startReduce = performance.now();
    largeArray.reduce((acc, num) => acc + num, 0);
    console.log(`  reduce: ${(performance.now() - startReduce).toFixed(2)}ms`);
}
testLoopPerformance();

console.log("\n9. OBJECT CREATION OPTIMIZATION");

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function createObjectStandard(count) {
    const start = performance.now();
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push({ name: `User${i}`, age: i % 100 });
    }
    console.log(`  Object literal: ${(performance.now() - start).toFixed(2)}ms`);
}

function createObjectClass(count) {
    const start = performance.now();
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(new User(`User${i}`, i % 100));
    }
    console.log(`  Class constructor: ${(performance.now() - start).toFixed(2)}ms`);
}

function createObjectReused(count) {
    const start = performance.now();
    const arr = [];
    const template = { name: "", age: 0 };
    for (let i = 0; i < count; i++) {
        const obj = Object.create(template);
        obj.name = `User${i}`;
        obj.age = i % 100;
        arr.push(obj);
    }
    console.log(`  Object.create: ${(performance.now() - start).toFixed(2)}ms`);
}

const objCount = 100000;
createObjectStandard(objCount);
createObjectClass(objCount);
createObjectReused(objCount);

console.log("\n10. CACHING OPTIMIZATION");

function withoutCache() {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        Math.sqrt(i) * Math.PI;
    }
    console.log(`  Without cache: ${(performance.now() - start).toFixed(2)}ms`);
}

const sqrtCache = new Map();
const pi = Math.PI;

function withCache() {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        if (!sqrtCache.has(i)) {
            sqrtCache.set(i, Math.sqrt(i));
        }
        sqrtCache.get(i) * pi;
    }
    console.log(`  With cache: ${(performance.now() - start).toFixed(2)}ms`);
}
withoutCache();
withCache();

console.log("\n11. PRACTICE TASKS");

class PerformanceMonitor {
    constructor() {
        this.metrics = {};
    }
    
    start(name) {
        this.metrics[name] = { start: performance.now() };
    }
    
    end(name) {
        if (this.metrics[name]) {
            const duration = performance.now() - this.metrics[name].start;
            console.log(`  ${name}: ${duration.toFixed(2)}ms`);
            delete this.metrics[name];
            return duration;
        }
        return null;
    }
    
    measure(fn, name) {
        this.start(name);
        const result = fn();
        this.end(name);
        return result;
    }
}

const monitor = new PerformanceMonitor();
monitor.measure(() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) sum += i;
    return sum;
}, "Sum Calculation");

function batchProcess(items, batchSize, processor) {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        results.push(processor(batch));
    }
    return results;
}

const items = Array.from({ length: 10000 }, (_, i) => i);
const batches = batchProcess(items, 1000, (batch) => {
    return batch.reduce((sum, n) => sum + n, 0);
});
console.log(`  Batch processing: ${batches.length} batches`);

function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const slowFibonacci = memoize((n) => {
    if (n <= 1) return n;
    return slowFibonacci(n - 1) + slowFibonacci(n - 2);
});

const fibStart = performance.now();
slowFibonacci(35);
console.log(`  Memoized fibonacci(35): ${(performance.now() - fibStart).toFixed(2)}ms`);

console.log("\nDay 61 completed - Performance Optimization covered.");