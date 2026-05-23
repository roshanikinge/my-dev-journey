// Day 57: Node.js Child Process

const { exec, execSync, spawn, fork, execFile } = require("child_process");
const path = require("path");

console.log("1. EXEC (buffer output)");

exec("node --version", (error, stdout, stderr) => {
    if (error) {
        console.log("Exec error:", error.message);
        return;
    }
    console.log("Node version:", stdout.trim());
});

exec("echo Hello from shell", (error, stdout) => {
    if (!error) console.log("Shell command output:", stdout.trim());
});

console.log("\n2. EXEC SYNC");

try {
    const nodeVersion = execSync("node --version", { encoding: "utf8" });
    console.log("Sync node version:", nodeVersion.trim());
    
    const currentDir = execSync("dir", { encoding: "utf8", shell: "cmd.exe" });
    console.log("Current directory listing (first 200 chars):", currentDir.substring(0, 200));
} catch (error) {
    console.error("ExecSync error:", error.message);
}

console.log("\n3. SPAWN (stream output)");

const ls = spawn("dir", [], { shell: "cmd.exe" });

ls.stdout.on("data", (data) => {
    console.log("Spawn stdout (first 300 chars):", data.toString().substring(0, 300));
});

ls.stderr.on("data", (data) => {
    console.error("Spawn stderr:", data.toString());
});

ls.on("close", (code) => {
    console.log(`Spawn process exited with code ${code}`);
});

console.log("\n4. SPAWN WITH ARGUMENTS");

const findFile = spawn("find", ["*.js"], { shell: "cmd.exe", cwd: "." });

let findOutput = "";
findFile.stdout.on("data", (data) => {
    findOutput += data.toString();
});

findFile.on("close", () => {
    const files = findOutput.split("\n").filter(f => f.trim());
    console.log(`Found ${files.length} JS files`);
});

console.log("\n5. EXECFILE (execute binary)");

execFile("node", ["--version"], (error, stdout) => {
    if (error) {
        console.log("ExecFile error:", error.message);
    } else {
        console.log("ExecFile node version:", stdout.trim());
    }
});

execFile("cmd", ["/c", "echo Hello from execFile"], (error, stdout) => {
    if (!error) console.log("ExecFile output:", stdout.trim());
});

console.log("\n6. FORK (Node.js child process)");

const childScript = `
    // Child process script
    process.on("message", (msg) => {
        console.log("Child received:", msg);
        process.send({ received: msg, timestamp: Date.now() });
    });
    
    setInterval(() => {
        process.send({ type: "heartbeat", time: new Date().toISOString() });
    }, 3000);
`;

const childScriptFile = "temp_child.js";
require("fs").writeFileSync(childScriptFile, childScript);

const child = fork(childScriptFile);

child.on("message", (msg) => {
    console.log("Parent received from child:", msg);
    if (msg.received) {
        console.log("Child acknowledged message");
        setTimeout(() => {
            child.kill();
            require("fs").unlinkSync(childScriptFile);
        }, 2000);
    }
});

child.send({ command: "start", data: "Hello Child" });

console.log("\n7. FORK WITH OPTIONS");

const envChild = fork(childScriptFile, [], {
    env: { ...process.env, CHILD_MODE: "production" },
    cwd: ".",
    silent: false
});

envChild.send({ test: "environment variables" });
setTimeout(() => {
    envChild.kill();
}, 1000);

console.log("\n8. DETACHED PROCESS");

const detached = spawn("node", ["-e", "setInterval(() => console.log('detached'), 5000)"], {
    detached: true,
    stdio: "ignore"
});

detached.unref();
console.log("Detached process started (runs independently)");

console.log("\n9. PROCESS STDIN/STDOUT/STDERR");

const grep = spawn("find", ["/i", "stream"], { shell: "cmd.exe" });

grep.stdin.write("stream data\n");
grep.stdin.write("more stream\n");
grep.stdin.write("no match here\n");
grep.stdin.end();

grep.stdout.on("data", (data) => {
    console.log("Grep matches:", data.toString().trim());
});

console.log("\n10. EXIT CODES AND SIGNALS");

const exitTest = spawn("node", ["-e", "process.exit(42)"]);

exitTest.on("exit", (code, signal) => {
    console.log(`Exit test - Code: ${code}, Signal: ${signal}`);
});

const signalTest = spawn("node", ["-e", "setInterval(() => {}, 1000)"]);

setTimeout(() => {
    signalTest.kill("SIGTERM");
}, 1000);

signalTest.on("exit", (code, signal) => {
    console.log(`Signal test - Code: ${code}, Signal: ${signal}`);
});

console.log("\n11. PRACTICE TASKS");

function runCommand(command, args = []) {
    return new Promise((resolve, reject) => {
        const process = spawn(command, args, { shell: true });
        
        let stdout = "";
        let stderr = "";
        
        process.stdout.on("data", (data) => {
            stdout += data.toString();
        });
        
        process.stderr.on("data", (data) => {
            stderr += data.toString();
        });
        
        process.on("close", (code) => {
            if (code === 0) {
                resolve({ stdout, stderr, code });
            } else {
                reject({ stdout, stderr, code });
            }
        });
    });
}

async function testCommands() {
    try {
        const result = await runCommand("echo", ["Running async command"]);
        console.log("Async command result:", result.stdout.trim());
    } catch (err) {
        console.error("Command failed:", err);
    }
}
testCommands();

function createWorkerPool(workerCount, workerScript) {
    const workers = [];
    
    for (let i = 0; i < workerCount; i++) {
        const worker = fork(workerScript);
        workers.push(worker);
    }
    
    return {
        sendToAll: (message) => {
            workers.forEach(worker => worker.send(message));
        },
        terminate: () => {
            workers.forEach(worker => worker.kill());
        }
    };
}

const workerFile = "temp_worker.js";
require("fs").writeFileSync(workerFile, `
    process.on("message", (msg) => {
        console.log(\`Worker \${process.pid} received: \${msg}\`);
        process.send({ pid: process.pid, received: msg });
    });
`);

const pool = createWorkerPool(3, workerFile);
pool.sendToAll({ task: "process data" });
setTimeout(() => {
    pool.terminate();
    require("fs").unlinkSync(workerFile);
}, 2000);

function executeWithTimeout(command, timeoutMs) {
    return new Promise((resolve, reject) => {
        const child = exec(command, (error, stdout, stderr) => {
            if (timeout) clearTimeout(timeout);
            if (error) reject(error);
            else resolve(stdout);
        });
        
        const timeout = setTimeout(() => {
            child.kill();
            reject(new Error(`Command timed out after ${timeoutMs}ms`));
        }, timeoutMs);
    });
}

executeWithTimeout("dir", 1000)
    .then(output => console.log("Command output (first 200 chars):", output.substring(0, 200)))
    .catch(err => console.log("Timeout test:", err.message));

console.log("\nDay 57 completed - Child Process module covered.");