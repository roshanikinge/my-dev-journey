// Day 58: Node.js Cluster Module

const cluster = require("cluster");
const http = require("http");
const os = require("os");

console.log("1. CLUSTER BASICS");

const numCPUs = os.cpus().length;
console.log(`Master PID: ${process.pid}`);
console.log(`Number of CPU cores: ${numCPUs}`);

if (cluster.isMaster) {
    console.log("\n2. FORKING WORKERS");
    
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork();
        console.log(`Forked worker ${worker.id} (PID: ${worker.process.pid})`);
    }
    
    console.log("\n3. WORKER EVENTS");
    
    cluster.on("online", (worker) => {
        console.log(`Worker ${worker.id} is online`);
    });
    
    cluster.on("listening", (worker, address) => {
        console.log(`Worker ${worker.id} listening on ${address.address}:${address.port}`);
    });
    
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.id} died (code: ${code}, signal: ${signal})`);
        console.log("Restarting worker...");
        cluster.fork();
    });
    
    cluster.on("disconnect", (worker) => {
        console.log(`Worker ${worker.id} disconnected`);
    });
    
    console.log("\n4. SENDING MESSAGES TO WORKERS");
    
    Object.values(cluster.workers).forEach((worker, index) => {
        setTimeout(() => {
            worker.send({ type: "greeting", message: `Hello from master to worker ${worker.id}` });
        }, index * 500);
    });
    
    setTimeout(() => {
        console.log("\n5. WORKER STATISTICS");
        console.log(`Total workers: ${Object.keys(cluster.workers).length}`);
        
        Object.values(cluster.workers).forEach(worker => {
            console.log(`  Worker ${worker.id} - PID: ${worker.process.pid}, State: ${worker.isConnected() ? "connected" : "disconnected"}`);
        });
    }, 2000);
    
    setTimeout(() => {
        console.log("\n6. RESTARTING A WORKER");
        const firstWorker = Object.values(cluster.workers)[0];
        if (firstWorker) {
            console.log(`Killing worker ${firstWorker.id}`);
            firstWorker.kill();
        }
    }, 4000);
    
    setTimeout(() => {
        console.log("\n7. DISCONNECTING WORKERS");
        Object.values(cluster.workers).forEach(worker => {
            worker.disconnect();
        });
    }, 8000);
    
} else {
    console.log(`Worker ${cluster.worker.id} started (PID: ${process.pid})`);
    
    console.log("\nHTTP SERVER IN WORKER");
    
    const server = http.createServer((req, res) => {
        const workerId = cluster.worker.id;
        const pid = process.pid;
        
        console.log(`Worker ${workerId} handling request: ${req.url}`);
        
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head><title>Cluster Demo</title></head>
            <body>
                <h1>Request handled by Worker ${workerId}</h1>
                <p>Process ID: ${pid}</p>
                <p>Request URL: ${req.url}</p>
                <p>Time: ${new Date().toLocaleString()}</p>
                <hr>
                <a href="/">Refresh</a>
            </body>
            </html>
        `);
    });
    
    server.listen(3000, () => {
        console.log(`Worker ${cluster.worker.id} server listening on port 3000`);
    });
    
    process.on("message", (msg) => {
        console.log(`Worker ${cluster.worker.id} received message:`, msg);
        
        if (msg.type === "greeting") {
            process.send({ type: "response", from: cluster.worker.id, message: `Hello master from worker ${cluster.worker.id}` });
        }
    });
    
    setTimeout(() => {
        console.log(`Worker ${cluster.worker.id} sending heartbeat to master`);
        process.send({ type: "heartbeat", workerId: cluster.worker.id, timestamp: Date.now() });
    }, 3000);
}

console.log("\n8. CLUSTER UTILITY FUNCTIONS");

function createClusteredServer(port, handler) {
    if (cluster.isMaster) {
        const workerCount = Math.min(numCPUs, 4);
        console.log(`Creating clustered server with ${workerCount} workers`);
        
        for (let i = 0; i < workerCount; i++) {
            cluster.fork();
        }
        
        cluster.on("exit", (worker) => {
            console.log(`Restarting dead worker ${worker.id}`);
            cluster.fork();
        });
    } else {
        const server = http.createServer(handler);
        server.listen(port);
        console.log(`Worker ${cluster.worker.id} handling requests on port ${port}`);
    }
}

function getWorkerLoadDistribution() {
    const stats = {};
    Object.values(cluster.workers || {}).forEach(worker => {
        stats[worker.id] = {
            pid: worker.process.pid,
            connected: worker.isConnected(),
            killed: worker.isDead ? worker.isDead() : false
        };
    });
    return stats;
}

function broadcastToWorkers(message) {
    if (!cluster.isMaster) {
        console.log("Only master can broadcast");
        return;
    }
    
    Object.values(cluster.workers).forEach(worker => {
        worker.send(message);
    });
    console.log(`Broadcasted to ${Object.keys(cluster.workers).length} workers`);
}

console.log("\n9. ROUND ROBIN SCHEDULING");

console.log("Cluster scheduling policy:", cluster.schedulingPolicy === cluster.SCHED_RR ? "Round-robin" : "Operating system");

console.log("\n10. PRACTICE TASKS");

function createWorkerPool(workerCount, workerModule) {
    if (cluster.isMaster) {
        const workers = [];
        
        for (let i = 0; i < workerCount; i++) {
            const worker = cluster.fork();
            workers.push(worker);
        }
        
        return {
            workers,
            sendToAll: (message) => {
                workers.forEach(worker => worker.send(message));
            },
            sendToWorker: (workerId, message) => {
                const worker = workers.find(w => w.id === workerId);
                if (worker) worker.send(message);
            },
            restartWorker: (workerId) => {
                const worker = workers.find(w => w.id === workerId);
                if (worker) {
                    worker.kill();
                    const newWorker = cluster.fork();
                    const index = workers.findIndex(w => w.id === workerId);
                    if (index !== -1) workers[index] = newWorker;
                }
            },
            terminate: () => {
                workers.forEach(worker => worker.disconnect());
            }
        };
    }
    return null;
}

function monitorWorkers() {
    if (!cluster.isMaster) return;
    
    setInterval(() => {
        console.log("\n--- Worker Monitor ---");
        Object.values(cluster.workers).forEach(worker => {
            const memory = worker.process.memoryUsage();
            console.log(`Worker ${worker.id}: Memory ${(memory.rss / 1024 / 1024).toFixed(2)} MB`);
        });
    }, 5000);
}

function gracefulShutdown() {
    if (!cluster.isMaster) return;
    
    console.log("Graceful shutdown initiated");
    
    Object.values(cluster.workers).forEach(worker => {
        worker.send({ type: "shutdown" });
        setTimeout(() => {
            if (!worker.isDead()) {
                worker.kill();
            }
        }, 5000);
    });
    
    setTimeout(() => {
        process.exit(0);
    }, 6000);
}

console.log("\nDay 58 completed - Cluster module covered.");