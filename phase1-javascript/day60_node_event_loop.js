// Day 60: Node.js Event Loop Deep Dive

console.log("1. EVENT LOOP PHASES DEMONSTRATION");

console.log("Start - Synchronous code");

setTimeout(() => {
    console.log("  Timer phase (setTimeout)");
}, 0);

setImmediate(() => {
    console.log("  Check phase (setImmediate)");
});

process.nextTick(() => {
    console.log("  Next Tick (microtask - before next phase)");
});

Promise.resolve().then(() => {
    console.log("  Promise microtask");
});

console.log("End - Synchronous code");

console.log("\n2. ORDER OF EXECUTION");

function eventLoopOrder() {
    console.log("1. Synchronous code");
    
    setTimeout(() => console.log("6. Timer (setTimeout)"), 0);
    setImmediate(() => console.log("7. setImmediate"));
    
    process.nextTick(() => console.log("3. process.nextTick (microtask)"));
    
    Promise.resolve()
        .then(() => console.log("4. Promise.then (microtask)"))
        .then(() => console.log("5. Second Promise.then"));
    
    console.log("2. More synchronous code");
}
eventLoopOrder();

console.log("\n3. NEXT TICK VS SETIMMEDIATE VS TIMEOUT");

function compareMicrotasks() {
    console.log("\nCase 1: setTimeout 0 vs setImmediate");
    setTimeout(() => console.log("  setTimeout 0"), 0);
    setImmediate(() => console.log("  setImmediate"));
    
    console.log("\nCase 2: Multiple nextTick");
    process.nextTick(() => console.log("  nextTick 1"));
    process.nextTick(() => console.log("  nextTick 2"));
    process.nextTick(() => console.log("  nextTick 3"));
    
    console.log("\nCase 3: Nested nextTick");
    process.nextTick(() => {
        console.log("  Outer nextTick");
        process.nextTick(() => console.log("    Inner nextTick"));
    });
    
    console.log("\nCase 4: Promise vs nextTick");
    process.nextTick(() => console.log("  nextTick runs first"));
    Promise.resolve().then(() => console.log("  Promise runs after nextTick"));
}
compareMicrotasks();

console.log("\n4. BLOCKING THE EVENT LOOP");

function blockingOperation(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Blocking loop
    }
    console.log(`Blocked for ${ms}ms`);
}

console.log("Demonstrating blocking (will block for 2 seconds)");
console.log("Start blocking...");
setTimeout(() => console.log("  This timer will be delayed"), 100);
blockingOperation(2000);
console.log("Blocking ended - timer above was delayed");

console.log("\n5. NON-BLOCKING ALTERNATIVE");

function nonBlockingDelay(ms, callback) {
    setTimeout(callback, ms);
}

console.log("Non-blocking approach:");
nonBlockingDelay(1000, () => console.log("  Non-blocking operation completed"));

console.log("\n6. EVENT LOOP PHASES WITH MULTIPLE OPERATIONS");

function demonstratePhases() {
    console.log("\n--- Phase 1: Timers ---");
    setTimeout(() => console.log("Timer executed"), 10);
    
    console.log("--- Phase 2: Pending Callbacks ---");
    const fs = require("fs");
    fs.readFile(__filename, () => {
        console.log("I/O callback executed");
        
        setTimeout(() => console.log("  Nested timer"), 0);
        setImmediate(() => console.log("  Nested setImmediate"));
        process.nextTick(() => console.log("  Nested nextTick"));
    });
    
    console.log("--- Phase 3: Idle/Prepare ---");
    
    console.log("--- Phase 4: Poll (I/O) ---");
    
    console.log("--- Phase 5: Check ---");
    setImmediate(() => console.log("Check phase callback"));
    
    console.log("--- Phase 6: Close ---");
    const server = require("http").createServer();
    server.listen(3000, () => {
        server.close(() => console.log("Close phase callback"));
    });
}
setTimeout(() => demonstratePhases(), 100);

console.log("\n7. MICROTASK QUEUE PRIORITY");

function microtaskPriority() {
    console.log("\nMicrotask execution order:");
    
    process.nextTick(() => console.log("  nextTick 1"));
    Promise.resolve().then(() => console.log("  Promise 1"));
    process.nextTick(() => console.log("  nextTick 2"));
    Promise.resolve().then(() => console.log("  Promise 2"));
    Promise.resolve().then(() => console.log("  Promise 3"));
    process.nextTick(() => console.log("  nextTick 3"));
}
microtaskPriority();

console.log("\n8. RECURSIVE NEXT TICK (STARVATION)");

let nextTickCount = 0;
let timeoutCount = 0;

function recursiveNextTick() {
    if (nextTickCount < 5) {
        nextTickCount++;
        console.log(`  Recursive nextTick ${nextTickCount}`);
        process.nextTick(recursiveNextTick);
    }
}

setTimeout(() => {
    timeoutCount++;
    console.log(`Timeout executed (count: ${timeoutCount})`);
}, 0);

recursiveNextTick();

console.log("\n9. SETIMMEDIATE VS TIMEOUT IN I/O CYCLE");

const fs = require("fs");
fs.readFile(__filename, () => {
    console.log("\nInside I/O callback:");
    
    setTimeout(() => console.log("  setTimeout (inside I/O)"), 0);
    setImmediate(() => console.log("  setImmediate (inside I/O)"));
});

console.log("\n10. EVENT LOOP METRICS");

function eventLoopMetrics() {
    const start = process.hrtime.bigint();
    
    setImmediate(() => {
        const end = process.hrtime.bigint();
        console.log(`Event loop delay: ${Number(end - start) / 1000000}ms`);
    });
    
    let delay = 0;
    const interval = setInterval(() => {
        delay += 100;
        console.log(`  Interval ${delay}ms`);
        if (delay >= 500) clearInterval(interval);
    }, 100);
}
eventLoopMetrics();

console.log("\n11. PRACTICE TASKS");

function debouncedTask(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

const debounced = debouncedTask(() => console.log("  Debounced task executed"), 500);
debounced();
debounced();
debounced();
setTimeout(debounced, 600);

function throttledTask(fn, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = setTimeout(() => inThrottle = false, limit);
        }
    };
}

const throttled = throttledTask(() => console.log("  Throttled task executed"), 1000);
throttled();
throttled();
throttled();
setTimeout(throttled, 1100);

function measureEventLoopDelay() {
    let lastCheck = Date.now();
    
    setInterval(() => {
        const now = Date.now();
        const delay = now - lastCheck - 1000;
        if (delay > 10) {
            console.log(`  Event loop blocked for ${delay}ms`);
        }
        lastCheck = now;
    }, 1000);
}
measureEventLoopDelay();

console.log("\nDay 60 completed - Event Loop covered.");