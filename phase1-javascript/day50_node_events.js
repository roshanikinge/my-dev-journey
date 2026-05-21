// Day 50: Node.js Events Module (EventEmitter)

const EventEmitter = require("events");

console.log("1. BASIC EVENT EMITTER");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log(`Hello ${name}!`);
});

myEmitter.emit("greet", "John");
myEmitter.emit("greet", "Alice");

console.log("\n2. MULTIPLE EVENT LISTENERS");

myEmitter.on("click", () => console.log("Listener 1: Button clicked"));
myEmitter.on("click", () => console.log("Listener 2: Button clicked"));
myEmitter.on("click", () => console.log("Listener 3: Button clicked"));

myEmitter.emit("click");

console.log("\n3. EVENT WITH MULTIPLE ARGUMENTS");

myEmitter.on("userLogin", (username, timestamp, ip) => {
    console.log(`User ${username} logged in at ${timestamp} from ${ip}`);
});

myEmitter.emit("userLogin", "john_doe", new Date().toLocaleTimeString(), "192.168.1.1");

console.log("\n4. ONCE METHOD (fires only once)");

myEmitter.once("oneTime", () => {
    console.log("This runs only once");
});

myEmitter.emit("oneTime");
myEmitter.emit("oneTime");
myEmitter.emit("oneTime");

console.log("\n5. REMOVING EVENT LISTENERS");

function specialHandler() {
    console.log("Special handler executed");
}

myEmitter.on("special", specialHandler);
myEmitter.emit("special");

myEmitter.off("special", specialHandler);
myEmitter.emit("special");
console.log("After removal, special handler no longer runs");

console.log("\n6. EVENT EMITTER PROPERTIES");

function handler1() { console.log("Handler 1"); }
function handler2() { console.log("Handler 2"); }

myEmitter.on("test", handler1);
myEmitter.on("test", handler2);

console.log("Listener count for 'test':", myEmitter.listenerCount("test"));
console.log("Event names:", myEmitter.eventNames());

myEmitter.removeAllListeners("test");
console.log("After removeAllListeners, count:", myEmitter.listenerCount("test"));

console.log("\n7. CUSTOM EVENT EMITTER CLASS");

class OrderSystem extends EventEmitter {
    constructor() {
        super();
        this.orders = [];
    }
    
    placeOrder(orderId, items) {
        this.orders.push({ orderId, items, status: "placed" });
        this.emit("orderPlaced", orderId, items);
        
        setTimeout(() => {
            this.emit("orderProcessed", orderId);
        }, 2000);
        
        return orderId;
    }
    
    getAllOrders() {
        return this.orders;
    }
}

const orderSystem = new OrderSystem();

orderSystem.on("orderPlaced", (orderId, items) => {
    console.log(`[EVENT] Order ${orderId} placed with ${items.length} items`);
});

orderSystem.on("orderProcessed", (orderId) => {
    console.log(`[EVENT] Order ${orderId} has been processed`);
});

console.log("Placing orders...");
orderSystem.placeOrder("ORD-001", ["Laptop", "Mouse"]);
orderSystem.placeOrder("ORD-002", ["Phone", "Charger"]);

console.log("\n8. ERROR HANDLING");

const errorEmitter = new EventEmitter();

errorEmitter.on("error", (err) => {
    console.log("Error caught:", err.message);
});

errorEmitter.emit("error", new Error("Something went wrong"));

console.log("\n9. MAX LISTENER WARNING");

const maxTest = new EventEmitter();
maxTest.setMaxListeners(5);
console.log("Max listeners set to:", maxTest.getMaxListeners());

for (let i = 0; i < 10; i++) {
    maxTest.on("crowded", () => {});
}
console.log("Added 10 listeners - warning may appear");

console.log("\n10. ASYNC EVENT HANDLING");

class AsyncEmitter extends EventEmitter {
    async processData(data) {
        this.emit("start", data);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.emit("middle", data);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.emit("complete", data);
        
        return data;
    }
}

const asyncEmitter = new AsyncEmitter();

asyncEmitter.on("start", (data) => console.log(`Processing started for: ${data}`));
asyncEmitter.on("middle", (data) => console.log(`Halfway done: ${data}`));
asyncEmitter.on("complete", (data) => console.log(`Processing complete: ${data}`));

asyncEmitter.processData("Important Data");

setTimeout(() => {
    console.log("\n11. PREPEND LISTENER (execute first)");

    const prependEmitter = new EventEmitter();
    
    prependEmitter.on("order", () => console.log("Listener 2 (normal)"));
    prependEmitter.prependListener("order", () => console.log("Listener 1 (prepended - runs first)"));
    
    prependEmitter.emit("order");
}, 3000);

setTimeout(() => {
    console.log("\n12. PRACTICE TASKS");
    
    class TaskManager extends EventEmitter {
        constructor() {
            super();
            this.tasks = [];
        }
        
        addTask(taskName) {
            this.tasks.push({ name: taskName, status: "pending" });
            this.emit("taskAdded", taskName);
            return this.tasks.length;
        }
        
        completeTask(taskName) {
            const task = this.tasks.find(t => t.name === taskName);
            if (task) {
                task.status = "completed";
                this.emit("taskCompleted", taskName);
            }
        }
        
        getPendingTasks() {
            return this.tasks.filter(t => t.status === "pending");
        }
    }
    
    const taskManager = new TaskManager();
    
    taskManager.on("taskAdded", (task) => console.log(`✓ Task added: ${task}`));
    taskManager.on("taskCompleted", (task) => console.log(`✓ Task completed: ${task}`));
    
    taskManager.addTask("Learn Node.js");
    taskManager.addTask("Build a project");
    taskManager.completeTask("Learn Node.js");
    
    console.log("Pending tasks:", taskManager.getPendingTasks().map(t => t.name));
    
}, 4000);

console.log("\nDay 50 completed - Events module covered.");