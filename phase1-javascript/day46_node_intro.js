// Day 46: Node.js Introduction

console.log("1. NODE.JS BASICS");
console.log("Node.js version:", process.version);
console.log("Platform:", process.platform);
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

console.log("\n2. GLOBAL OBJECTS");
console.log("setTimeout example:");
setTimeout(() => console.log("  This runs after 1 second"), 1000);
console.log("  This runs immediately");

console.log("\n3. PROCESS ARGUMENTS");
const args = process.argv.slice(2);
console.log("Command line arguments:", args);
if (args.length > 0) {
    console.log("First argument:", args[0]);
}

console.log("\n4. ENVIRONMENT VARIABLES");
console.log("NODE_ENV:", process.env.NODE_ENV || "not set");
console.log("PATH:", process.env.PATH.substring(0, 50) + "...");

console.log("\n5. SIMPLE HTTP SERVER");
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>Node.js Server</title></head>
        <body>
            <h1>Hello from Node.js!</h1>
            <p>Request URL: ${req.url}</p>
            <p>Request Method: ${req.method}</p>
            <p>Server Time: ${new Date().toLocaleString()}</p>
        </body>
        </html>
    `);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`\nServer running at http://localhost:${PORT}/`);
    console.log("Press Ctrl+C to stop the server");
});

// Handle server shutdown
process.on("SIGINT", () => {
    console.log("\nShutting down server...");
    server.close(() => {
        console.log("Server closed");
        process.exit(0);
    });
});