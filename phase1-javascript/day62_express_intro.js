// Day 62: Express.js Introduction

const express = require("express");
const app = express();
const PORT = 3000;

console.log("1. BASIC EXPRESS SERVER");

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><title>Express Demo</title></head>
        <body>
            <h1>Welcome to Express.js!</h1>
            <p>This is my first Express server</p>
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/api/users">Users API</a></li>
                <li><a href="/json">JSON Response</a></li>
            </ul>
        </body>
        </html>
    `);
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1><p>This is the about page</p><a href='/'>Back</a>");
});

app.get("/api/users", (req, res) => {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" }
    ];
    res.json(users);
});

app.get("/json", (req, res) => {
    res.json({
        message: "JSON response",
        timestamp: new Date().toISOString(),
        status: "success"
    });
});

console.log("\n2. ROUTE PARAMETERS");

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.json({ userId, message: `Fetching user with ID: ${userId}` });
});

app.get("/products/:category/:productId", (req, res) => {
    const { category, productId } = req.params;
    res.json({ category, productId });
});

console.log("\n3. QUERY PARAMETERS");

app.get("/search", (req, res) => {
    const { q, page = 1, limit = 10 } = req.query;
    res.json({
        searchTerm: q,
        page: parseInt(page),
        limit: parseInt(limit),
        results: [`Result 1 for ${q}`, `Result 2 for ${q}`]
    });
});

app.get("/filter", (req, res) => {
    res.json({
        filters: req.query,
        message: "Query parameters received"
    });
});

console.log("\n4. REQUEST METHODS");

app.post("/api/data", (req, res) => {
    res.json({ method: "POST", message: "Data received" });
});

app.put("/api/data/:id", (req, res) => {
    res.json({ method: "PUT", id: req.params.id, message: "Resource updated" });
});

app.delete("/api/data/:id", (req, res) => {
    res.json({ method: "DELETE", id: req.params.id, message: "Resource deleted" });
});

app.patch("/api/data/:id", (req, res) => {
    res.json({ method: "PATCH", id: req.params.id, message: "Resource partially updated" });
});

console.log("\n5. RESPONSE METHODS");

app.get("/response-types", (req, res) => {
    const { type } = req.query;
    
    switch(type) {
        case "html":
            res.send("<h1>HTML Response</h1>");
            break;
        case "json":
            res.json({ type: "json", data: "JSON response" });
            break;
        case "status":
            res.status(201).json({ message: "Created" });
            break;
        case "redirect":
            res.redirect("/");
            break;
        default:
            res.send("Default response");
    }
});

console.log("\n6. STATUS CODES");

app.get("/status/:code", (req, res) => {
    const code = parseInt(req.params.code);
    const messages = {
        200: "OK",
        201: "Created",
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error"
    };
    res.status(code).json({
        statusCode: code,
        message: messages[code] || "Custom Status"
    });
});

console.log("\n7. STATIC FILES");

const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));
console.log("Static files served from /static (create 'public' folder)");

console.log("\n8. REQUEST INFO MIDDLEWARE");

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

console.log("\n9. CHAINED ROUTES");

app.route("/chained")
    .get((req, res) => {
        res.json({ method: "GET", message: "Chained GET" });
    })
    .post((req, res) => {
        res.json({ method: "POST", message: "Chained POST" });
    })
    .put((req, res) => {
        res.json({ method: "PUT", message: "Chained PUT" });
    })
    .delete((req, res) => {
        res.json({ method: "DELETE", message: "Chained DELETE" });
    });

console.log("\n10. PRACTICE TASKS");

let todos = [
    { id: 1, task: "Learn Express", completed: false },
    { id: 2, task: "Build API", completed: false }
];

app.get("/api/todos", (req, res) => {
    res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
});

app.post("/api/todos", express.json(), (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: "Task is required" });
    }
    const newTodo = {
        id: todos.length + 1,
        task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put("/api/todos/:id", express.json(), (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    todo.task = req.body.task || todo.task;
    res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }
    todos.splice(index, 1);
    res.status(204).send();
});

console.log("\n11. CUSTOM 404 HANDLER");

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
        path: req.url,
        method: req.method
    });
});

console.log("\n12. ERROR HANDLING MIDDLEWARE");

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Internal Server Error",
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`\nServer running at http://localhost:${PORT}/`);
    console.log("\nAvailable endpoints:");
    console.log("  GET  /                    - Home page");
    console.log("  GET  /about               - About page");
    console.log("  GET  /api/users           - Get users");
    console.log("  GET  /users/:id           - Get user by ID");
    console.log("  GET  /search?q=term       - Search with query");
    console.log("  GET  /api/todos           - Get all todos");
    console.log("  POST /api/todos           - Create todo (JSON body: { task })");
    console.log("  PUT  /api/todos/:id       - Update todo");
    console.log("  DELETE /api/todos/:id     - Delete todo");
    console.log("\nPress Ctrl+C to stop server");
});