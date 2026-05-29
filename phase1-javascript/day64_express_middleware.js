// Day 64: Express.js Middleware

const express = require("express");
const app = express();
const PORT = 3002;

console.log("1. APPLICATION LEVEL MIDDLEWARE");

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
});

console.log("\n2. ROUTER LEVEL MIDDLEWARE");

const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
    console.log(`API Router - ${req.method} ${req.url}`);
    next();
});

apiRouter.get("/data", (req, res) => {
    res.json({ message: "API data", timestamp: req.requestTime });
});

app.use("/api", apiRouter);

console.log("\n3. BUILT-IN MIDDLEWARE");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", (req, res) => {
    res.json({
        body: req.body,
        contentType: req.headers["content-type"]
    });
});

console.log("\n4. THIRD-PARTY MIDDLEWARE (simulated)");

function morganLogger(format) {
    return (req, res, next) => {
        const start = Date.now();
        res.on("finish", () => {
            const duration = Date.now() - start;
            console.log(`${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
        });
        next();
    };
}

app.use(morganLogger("combined"));

console.log("\n5. CUSTOM LOGGING MIDDLEWARE");

function requestLogger(options = {}) {
    return (req, res, next) => {
        const logData = {
            method: req.method,
            url: req.url,
            ip: req.ip,
            timestamp: new Date().toISOString(),
            userAgent: req.get("user-agent")
        };
        
        if (options.logBody && req.body) {
            logData.body = req.body;
        }
        
        console.log("Request:", JSON.stringify(logData, null, 2));
        next();
    };
}

app.use(requestLogger({ logBody: true }));

console.log("\n6. AUTHENTICATION MIDDLEWARE");

const users = {
    "john": "secret123",
    "alice": "password456"
};

function basicAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Basic ")) {
        res.setHeader("WWW-Authenticate", "Basic");
        return res.status(401).json({ error: "Authentication required" });
    }
    
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
    const [username, password] = credentials.split(":");
    
    if (users[username] && users[username] === password) {
        req.user = { username, authenticated: true };
        next();
    } else {
        res.status(401).json({ error: "Invalid credentials" });
    }
}

app.get("/protected", basicAuth, (req, res) => {
    res.json({ message: "Access granted", user: req.user });
});

console.log("\n7. RATE LIMITING MIDDLEWARE");

const requestCounts = new Map();

function rateLimiter(maxRequests, windowMs) {
    return (req, res, next) => {
        const ip = req.ip;
        const now = Date.now();
        const windowStart = now - windowMs;
        
        if (!requestCounts.has(ip)) {
            requestCounts.set(ip, []);
        }
        
        const requests = requestCounts.get(ip).filter(time => time > windowStart);
        
        if (requests.length >= maxRequests) {
            return res.status(429).json({
                error: "Too many requests",
                retryAfter: Math.ceil(windowMs / 1000)
            });
        }
        
        requests.push(now);
        requestCounts.set(ip, requests);
        next();
    };
}

app.use("/api/limited", rateLimiter(5, 10000));

app.get("/api/limited/test", (req, res) => {
    res.json({ message: "Request successful" });
});

console.log("\n8. VALIDATION MIDDLEWARE");

function validateUser(req, res, next) {
    const { name, email, age } = req.body;
    const errors = [];
    
    if (!name || name.length < 2) {
        errors.push("Name must be at least 2 characters");
    }
    
    if (!email || !email.includes("@")) {
        errors.push("Valid email is required");
    }
    
    if (age && (isNaN(age) || age < 0 || age > 150)) {
        errors.push("Age must be between 0 and 150");
    }
    
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    
    next();
}

app.post("/api/users", express.json(), validateUser, (req, res) => {
    res.json({ message: "User created", user: req.body });
});

console.log("\n9. CORS MIDDLEWARE");

function corsMiddleware(options = {}) {
    return (req, res, next) => {
        const origin = req.headers.origin;
        const allowedOrigins = options.allowedOrigins || ["*"];
        
        if (allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin || "*");
        }
        
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        
        if (options.allowCredentials) {
            res.setHeader("Access-Control-Allow-Credentials", "true");
        }
        
        if (req.method === "OPTIONS") {
            return res.sendStatus(204);
        }
        
        next();
    };
}

app.use(corsMiddleware({ allowCredentials: true }));

app.get("/api/cors-test", (req, res) => {
    res.json({ message: "CORS enabled" });
});

console.log("\n10. COMPRESSION MIDDLEWARE");

function compressionMiddleware() {
    return (req, res, next) => {
        const acceptEncoding = req.headers["accept-encoding"];
        
        if (acceptEncoding && acceptEncoding.includes("gzip")) {
            res.setHeader("Content-Encoding", "gzip");
            const originalSend = res.send;
            
            const zlib = require("zlib");
            res.send = function(body) {
                zlib.gzip(body, (err, compressed) => {
                    if (err) {
                        originalSend.call(this, body);
                    } else {
                        res.setHeader("Content-Length", compressed.length);
                        originalSend.call(this, compressed);
                    }
                });
            };
        }
        next();
    };
}

app.use(compressionMiddleware());

app.get("/api/large-data", (req, res) => {
    const data = { message: "A".repeat(10000) };
    res.json(data);
});

console.log("\n11. TIMING MIDDLEWARE");

function responseTimeMiddleware() {
    return (req, res, next) => {
        const start = process.hrtime();
        
        res.on("finish", () => {
            const diff = process.hrtime(start);
            const time = diff[0] * 1e3 + diff[1] / 1e6;
            res.setHeader("X-Response-Time", `${time.toFixed(2)}ms`);
            console.log(`Response time: ${time.toFixed(2)}ms`);
        });
        
        next();
    };
}

app.use(responseTimeMiddleware());

console.log("\n12. CONDITIONAL MIDDLEWARE");

function environmentMiddleware(env) {
    return (req, res, next) => {
        if (process.env.NODE_ENV === env) {
            console.log(`Running in ${env} environment`);
            req.env = env;
        }
        next();
    };
}

app.use(environmentMiddleware("development"));

console.log("\n13. MIDDLEWARE CHAINING");

function middlewareA(req, res, next) {
    console.log("  Middleware A");
    req.steps = req.steps || [];
    req.steps.push("A");
    next();
}

function middlewareB(req, res, next) {
    console.log("  Middleware B");
    req.steps.push("B");
    next();
}

function middlewareC(req, res, next) {
    console.log("  Middleware C");
    req.steps.push("C");
    next();
}

app.get("/chain", middlewareA, middlewareB, middlewareC, (req, res) => {
    res.json({ steps: req.steps });
});

console.log("\n14. SKIPPING MIDDLEWARE");

function optionalMiddleware(condition) {
    return (req, res, next) => {
        if (condition(req)) {
            console.log("  Conditional middleware executed");
            next();
        } else {
            console.log("  Conditional middleware skipped");
            next();
        }
    };
}

app.get("/conditional", optionalMiddleware((req) => req.query.enabled === "true"), (req, res) => {
    res.json({ message: "Conditional route" });
});

console.log("\n15. PRACTICE TASKS");

function cacheMiddleware(duration) {
    const cache = new Map();
    
    return (req, res, next) => {
        const key = req.url;
        const cached = cache.get(key);
        
        if (cached && Date.now() - cached.timestamp < duration) {
            console.log(`  Cache hit for ${key}`);
            return res.json(cached.data);
        }
        
        const originalJson = res.json;
        res.json = function(data) {
            cache.set(key, { data, timestamp: Date.now() });
            originalJson.call(this, data);
        };
        
        next();
    };
}

app.get("/api/cached-data", cacheMiddleware(5000), (req, res) => {
    res.json({ data: Math.random(), timestamp: Date.now() });
});

function sanitizeMiddleware() {
    return (req, res, next) => {
        if (req.body) {
            for (const key in req.body) {
                if (typeof req.body[key] === "string") {
                    req.body[key] = req.body[key]
                        .replace(/[<>]/g, "")
                        .trim();
                }
            }
        }
        next();
    };
}

app.use("/api/sanitized", sanitizeMiddleware());

app.post("/api/sanitized/data", (req, res) => {
    res.json({ sanitized: req.body });
});

function loggerMiddleware(level = "info") {
    const levels = { error: 0, warn: 1, info: 2, debug: 3 };
    
    return (req, res, next) => {
        if (levels[level] >= levels.info) {
            console.log(`[${level}] ${req.method} ${req.url}`);
        }
        next();
    };
}

app.use(loggerMiddleware("debug"));

app.listen(PORT, () => {
    console.log(`\nMiddleware server running at http://localhost:${PORT}/`);
    console.log("\nAvailable endpoints:");
    console.log("  GET  /protected              - Basic auth required");
    console.log("  GET  /api/limited/test       - Rate limited (5 requests/10s)");
    console.log("  POST /api/users              - With validation middleware");
    console.log("  GET  /chain                  - Middleware chaining demo");
    console.log("  GET  /api/cached-data        - Cached response (5 seconds)");
    console.log("  POST /api/sanitized/data     - Input sanitization");
    console.log("  GET  /api/cors-test          - CORS enabled");
    console.log("\nPress Ctrl+C to stop server");
});