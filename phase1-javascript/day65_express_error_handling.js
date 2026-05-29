// Day 65: Express.js Error Handling

const express = require("express");
const app = express();
const PORT = 3003;

app.use(express.json());

console.log("1. BASIC ERROR HANDLING");

app.get("/error/sync", (req, res) => {
    throw new Error("Synchronous error occurred");
});

app.get("/error/async", async (req, res) => {
    throw new Error("Asynchronous error occurred");
});

app.get("/error/caught", (req, res) => {
    try {
        throw new Error("Caught error");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

console.log("\n2. ASYNC ERROR HANDLING WITH TRY/CATCH");

app.get("/async-safe", async (req, res, next) => {
    try {
        const result = await someAsyncOperation();
        res.json({ success: true, result });
    } catch (err) {
        next(err);
    }
});

function someAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Async operation failed")), 100);
    });
}

console.log("\n3. CUSTOM ERROR CLASSES");

class ValidationError extends Error {
    constructor(message, fields) {
        super(message);
        this.name = "ValidationError";
        this.statusCode = 400;
        this.fields = fields;
    }
}

class NotFoundError extends Error {
    constructor(resource) {
        super(`${resource} not found`);
        this.name = "NotFoundError";
        this.statusCode = 404;
        this.resource = resource;
    }
}

class AuthorizationError extends Error {
    constructor(message) {
        super(message || "Unauthorized access");
        this.name = "AuthorizationError";
        this.statusCode = 401;
    }
}

app.get("/api/users/:id", (req, res, next) => {
    const userId = parseInt(req.params.id);
    
    if (isNaN(userId)) {
        return next(new ValidationError("Invalid user ID", ["id"]));
    }
    
    if (userId !== 1) {
        return next(new NotFoundError("User"));
    }
    
    res.json({ id: userId, name: "John Doe" });
});

console.log("\n4. ROUTE SPECIFIC ERROR HANDLING");

const userRouter = express.Router();

userRouter.get("/:id", (req, res, next) => {
    if (req.params.id === "admin") {
        next(new AuthorizationError("Admin access required"));
    } else {
        res.json({ user: `User ${req.params.id}` });
    }
});

userRouter.use((err, req, res, next) => {
    console.log("User router error handler");
    res.status(err.statusCode || 500).json({
        error: err.message,
        router: "users"
    });
});

app.use("/api/users-router", userRouter);

console.log("\n5. UNHANDLED REJECTION HANDLER");

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection:", reason);
});

app.get("/unhandled", (req, res) => {
    Promise.reject(new Error("Unhandled promise rejection"));
    res.json({ message: "This will cause unhandled rejection" });
});

console.log("\n6. 404 ERROR HANDLER");

app.use("/api/valid-path", (req, res) => {
    res.json({ message: "Valid path" });
});

app.use((req, res, next) => {
    const error = new NotFoundError(`Route ${req.method} ${req.url}`);
    next(error);
});

console.log("\n7. GLOBAL ERROR HANDLER");

function errorLogger(err, req, res, next) {
    console.error(`[ERROR] ${err.name}: ${err.message}`);
    console.error(`  Path: ${req.method} ${req.url}`);
    console.error(`  Stack: ${err.stack?.split("\n")[1]?.trim()}`);
    next(err);
}

function errorResponder(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const response = {
        error: {
            name: err.name || "InternalServerError",
            message: err.message || "An unexpected error occurred",
            statusCode: statusCode
        }
    };
    
    if (process.env.NODE_ENV === "development") {
        response.error.stack = err.stack;
    }
    
    if (err.fields) {
        response.error.fields = err.fields;
    }
    
    res.status(statusCode).json(response);
}

app.use(errorLogger);
app.use(errorResponder);

console.log("\n8. ASYNC WRAPPER FOR ROUTES");

function asyncHandler(fn) {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

app.get("/async-wrapped", asyncHandler(async (req, res) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Async wrapped error")), 100);
    });
    res.json({ message: "Will not reach here" });
}));

console.log("\n9. MULTIPLE ERROR TYPES HANDLING");

app.get("/api/validation-test", (req, res, next) => {
    const { email, age } = req.query;
    const errors = [];
    
    if (!email || !email.includes("@")) {
        errors.push({ field: "email", message: "Valid email required" });
    }
    
    if (age && (isNaN(age) || age < 0 || age > 120)) {
        errors.push({ field: "age", message: "Age must be between 0 and 120" });
    }
    
    if (errors.length > 0) {
        const error = new ValidationError("Validation failed", errors);
        return next(error);
    }
    
    res.json({ validated: { email, age } });
});

console.log("\n10. ERROR HANDLING WITH DATABASE SIMULATION");

class DatabaseError extends Error {
    constructor(message, query) {
        super(message);
        this.name = "DatabaseError";
        this.statusCode = 503;
        this.query = query;
    }
}

function simulateDatabaseQuery(query) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (query.includes("SELECT * FROM broken")) {
                reject(new DatabaseError("Connection failed", query));
            } else {
                resolve({ rows: [{ id: 1, name: "Result" }] });
            }
        }, 100);
    });
}

app.get("/api/db-query", asyncHandler(async (req, res) => {
    const { query } = req.query;
    const result = await simulateDatabaseQuery(query || "SELECT * FROM users");
    res.json({ success: true, data: result });
}));

console.log("\n11. CUSTOM ERROR HANDLER FOR SPECIFIC ROUTES");

const adminRouter = express.Router();

adminRouter.get("/settings", (req, res) => {
    throw new AuthorizationError("Admin role required");
});

adminRouter.use((err, req, res, next) => {
    if (err.name === "AuthorizationError") {
        res.status(403).json({ error: "Admin access denied" });
    } else {
        next(err);
    }
});

app.use("/admin", adminRouter);

console.log("\n12. PRACTICE TASKS");

class RateLimitError extends Error {
    constructor(message, retryAfter) {
        super(message || "Rate limit exceeded");
        this.name = "RateLimitError";
        this.statusCode = 429;
        this.retryAfter = retryAfter;
    }
}

const requestLog = new Map();

function rateLimitWithError(limit, windowMs) {
    return (req, res, next) => {
        const ip = req.ip;
        const now = Date.now();
        const windowStart = now - windowMs;
        
        if (!requestLog.has(ip)) {
            requestLog.set(ip, []);
        }
        
        const requests = requestLog.get(ip).filter(t => t > windowStart);
        
        if (requests.length >= limit) {
            const retryAfter = Math.ceil(windowMs / 1000);
            next(new RateLimitError("Too many requests", retryAfter));
        } else {
            requests.push(now);
            requestLog.set(ip, requests);
            next();
        }
    };
}

app.get("/api/rate-limited", rateLimitWithError(3, 10000), (req, res) => {
    res.json({ message: "Request successful", timestamp: Date.now() });
});

function errorTracker() {
    const errors = [];
    
    return {
        middleware: (err, req, res, next) => {
            errors.push({
                timestamp: Date.now(),
                name: err.name,
                message: err.message,
                url: req.url,
                method: req.method
            });
            
            if (errors.length > 100) errors.shift();
            next(err);
        },
        getErrors: () => [...errors],
        clearErrors: () => { errors.length = 0; }
    };
}

const tracker = errorTracker();
app.use(tracker.middleware);

app.get("/api/error-stats", (req, res) => {
    res.json({ errors: tracker.getErrors(), count: tracker.getErrors().length });
});

function gracefulShutdown(err, req, res, next) {
    if (err.statusCode === 500) {
        console.error("Fatal error, shutting down...");
        process.exit(1);
    }
    next(err);
}

app.use(gracefulShutdown);

app.listen(PORT, () => {
    console.log(`\nError handling server running at http://localhost:${PORT}/`);
    console.log("\nAvailable endpoints:");
    console.log("  GET  /error/sync          - Throws sync error");
    console.log("  GET  /error/async         - Throws async error");
    console.log("  GET  /api/users/:id       - Custom error classes");
    console.log("  GET  /api/validation-test - Validation errors");
    console.log("  GET  /api/db-query        - Database error simulation");
    console.log("  GET  /api/rate-limited    - Rate limit with error");
    console.log("  GET  /api/error-stats     - View error statistics");
    console.log("\nPress Ctrl+C to stop server");
});