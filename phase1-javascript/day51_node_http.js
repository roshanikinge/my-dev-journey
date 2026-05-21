// Day 51: Node.js HTTP/HTTPS Module

const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

console.log("1. BASIC HTTP SERVER");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    
    console.log(`${method} ${pathname}`);
    
    // Route handling
    if (pathname === "/" && method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head><title>Node.js HTTP Server</title></head>
            <body>
                <h1>HTTP Module Demo</h1>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/api/users">API Users</a></li>
                    <li><a href="/api/products">API Products</a></li>
                    <li><a href="/echo?message=Hello">Echo Message</a></li>
                </ul>
                <form method="POST" action="/submit">
                    <input type="text" name="name" placeholder="Your name">
                    <button type="submit">Submit POST</button>
                </form>
            </body>
            </html>
        `);
    }
    else if (pathname === "/about" && method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>About Page</h1>
            <p>This is a demo HTTP server using Node.js http module</p>
            <a href="/">Back to Home</a>
        `);
    }
    else if (pathname === "/api/users" && method === "GET") {
        const users = [
            { id: 1, name: "John Doe", email: "john@example.com" },
            { id: 2, name: "Jane Smith", email: "jane@example.com" },
            { id: 3, name: "Bob Johnson", email: "bob@example.com" }
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users, null, 2));
    }
    else if (pathname === "/api/products" && method === "GET") {
        const products = [
            { id: 1, name: "Laptop", price: 999 },
            { id: 2, name: "Mouse", price: 29 },
            { id: 3, name: "Keyboard", price: 79 }
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products, null, 2));
    }
    else if (pathname === "/echo" && method === "GET") {
        const query = parsedUrl.query;
        const message = query.message || "No message provided";
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Echo Response</h1>
            <p>Your message: ${message}</p>
            <a href="/">Back to Home</a>
        `);
    }
    else if (pathname === "/submit" && method === "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            console.log("POST body:", body);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
                <h1>Form Submitted</h1>
                <p>Data received: ${body}</p>
                <a href="/">Back to Home</a>
            `);
        });
    }
    else if (pathname === "/json" && method === "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                const data = JSON.parse(body);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ received: data, status: "success" }));
            } catch (err) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <h1>404 Not Found</h1>
            <p>The page ${pathname} does not exist</p>
            <a href="/">Go Home</a>
        `);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`\nServer running at http://localhost:${PORT}/`);
    console.log("Available endpoints:");
    console.log("  GET  /              - Home page");
    console.log("  GET  /about         - About page");
    console.log("  GET  /api/users     - JSON users data");
    console.log("  GET  /api/products  - JSON products data");
    console.log("  GET  /echo?message=Hello - Echo message");
    console.log("  POST /submit        - Submit form data");
    console.log("  POST /json          - Send JSON data");
    console.log("\nPress Ctrl+C to stop server");
});

console.log("\n2. MAKING HTTP REQUESTS (CLIENT)");

function makeGetRequest(endpoint) {
    const options = {
        hostname: "jsonplaceholder.typicode.com",
        port: 80,
        path: endpoint,
        method: "GET"
    };
    
    const request = http.request(options, (response) => {
        let data = "";
        response.on("data", chunk => data += chunk);
        response.on("end", () => {
            console.log(`GET ${endpoint} - Status: ${response.statusCode}`);
            const parsed = JSON.parse(data);
            console.log(`  First item:`, parsed[0] || parsed);
        });
    });
    
    request.on("error", (err) => console.log("Request error:", err.message));
    request.end();
}

setTimeout(() => {
    console.log("\nMaking external API calls:");
    makeGetRequest("/posts/1");
    makeGetRequest("/users/1");
}, 2000);

console.log("\n3. CREATING CUSTOM HTTP CLIENT");

function postJSON(url, data) {
    const parsedUrl = new URL(url);
    const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || 80,
        path: parsedUrl.pathname,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(JSON.stringify(data))
        }
    };
    
    const req = http.request(options, (res) => {
        let responseData = "";
        res.on("data", chunk => responseData += chunk);
        res.on("end", () => {
            console.log("POST response:", responseData);
        });
    });
    
    req.write(JSON.stringify(data));
    req.end();
}

setTimeout(() => {
    console.log("\nSending custom POST request to test server...");
    postJSON(`http://localhost:${PORT}/json`, { name: "Test User", action: "testing" });
}, 3000);

console.log("\n4. PRACTICE TASKS");

class SimpleRouter {
    constructor() {
        this.routes = { GET: {}, POST: {}, PUT: {}, DELETE: {} };
    }
    
    get(path, handler) {
        this.routes.GET[path] = handler;
    }
    
    post(path, handler) {
        this.routes.POST[path] = handler;
    }
    
    handle(req, res) {
        const method = req.method;
        const parsedUrl = url.parse(req.url, true);
        const pathname = parsedUrl.pathname;
        
        const handler = this.routes[method][pathname];
        if (handler) {
            handler(req, res, parsedUrl.query);
        } else {
            res.writeHead(404);
            res.end("Route not found");
        }
    }
}

const router = new SimpleRouter();
router.get("/test", (req, res, query) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Router working!", query }));
});

const routerServer = http.createServer((req, res) => router.handle(req, res));
routerServer.listen(3001, () => {
    console.log("\nRouter server running on port 3001");
    console.log("Test: http://localhost:3001/test?name=John");
});

setTimeout(() => {
    console.log("\nDay 51 completed - HTTP module covered.");
    console.log("\nTo stop all servers, press Ctrl+C");
}, 4000);