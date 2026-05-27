// Day 63: Express.js Routing

const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("1. ROUTER MODULE");

const userRouter = express.Router();
const productRouter = express.Router();
const adminRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.json({ route: "users", action: "list all users" });
});

userRouter.get("/:id", (req, res) => {
    res.json({ route: "users", action: "get user", userId: req.params.id });
});

userRouter.post("/", (req, res) => {
    res.json({ route: "users", action: "create user", data: req.body });
});

userRouter.put("/:id", (req, res) => {
    res.json({ route: "users", action: "update user", userId: req.params.id, data: req.body });
});

userRouter.delete("/:id", (req, res) => {
    res.json({ route: "users", action: "delete user", userId: req.params.id });
});

productRouter.get("/", (req, res) => {
    res.json({ route: "products", action: "list products" });
});

productRouter.get("/:id", (req, res) => {
    res.json({ route: "products", action: "get product", productId: req.params.id });
});

productRouter.post("/", (req, res) => {
    res.json({ route: "products", action: "create product", data: req.body });
});

adminRouter.get("/dashboard", (req, res) => {
    res.json({ route: "admin", action: "dashboard" });
});

adminRouter.get("/users", (req, res) => {
    res.json({ route: "admin", action: "manage users" });
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/admin", adminRouter);

console.log("\n2. ROUTE GROUPS");

const apiV1 = express.Router();
const apiV2 = express.Router();

apiV1.get("/users", (req, res) => {
    res.json({ version: "v1", users: ["John (v1)", "Jane (v1)"] });
});

apiV1.get("/products", (req, res) => {
    res.json({ version: "v1", products: ["Laptop (v1)", "Mouse (v1)"] });
});

apiV2.get("/users", (req, res) => {
    res.json({ version: "v2", users: [{ name: "John v2", email: "john@v2.com" }] });
});

apiV2.get("/products", (req, res) => {
    res.json({ version: "v2", products: [{ name: "Laptop v2", price: 999 }] });
});

app.use("/v1", apiV1);
app.use("/v2", apiV2);

console.log("\n3. NESTED ROUTES");

const blogRouter = express.Router();
const postRouter = express.Router({ mergeParams: true });

blogRouter.get("/", (req, res) => {
    res.json({ route: "blog", action: "list blogs" });
});

blogRouter.get("/:blogId", (req, res) => {
    res.json({ route: "blog", action: "get blog", blogId: req.params.blogId });
});

postRouter.get("/", (req, res) => {
    res.json({ route: "posts", blogId: req.params.blogId, action: "list posts" });
});

postRouter.get("/:postId", (req, res) => {
    res.json({ route: "posts", blogId: req.params.blogId, postId: req.params.postId });
});

blogRouter.use("/:blogId/posts", postRouter);
app.use("/blogs", blogRouter);

console.log("\n4. ROUTE PARAMETERS WITH VALIDATION");

app.param("id", (req, res, next, id) => {
    const numId = parseInt(id);
    if (isNaN(numId)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }
    req.validatedId = numId;
    next();
});

app.get("/validate/:id", (req, res) => {
    res.json({ message: "Valid ID", id: req.validatedId });
});

console.log("\n5. MULTIPLE ROUTE HANDLERS");

const middleware1 = (req, res, next) => {
    console.log("  Middleware 1 executed");
    req.data = { step: 1 };
    next();
};

const middleware2 = (req, res, next) => {
    console.log("  Middleware 2 executed");
    req.data.step = 2;
    next();
};

app.get("/chain", middleware1, middleware2, (req, res) => {
    res.json({ message: "All middleware executed", data: req.data });
});

console.log("\n6. ROUTE SPECIFIC MIDDLEWARE");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || token !== "Bearer secret123") {
        return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = { id: 1, name: "Authenticated User" };
    next();
};

app.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: "Access granted", user: req.user });
});

app.get("/public", (req, res) => {
    res.json({ message: "Public access" });
});

console.log("\n7. REGULAR EXPRESSION ROUTES");

app.get(/.*user.*/, (req, res) => {
    res.json({ message: "Route contains 'user'", path: req.path });
});

app.get("/file/*.js", (req, res) => {
    res.json({ message: "JavaScript file requested", path: req.path });
});

console.log("\n8. ROUTE PREFIXES");

const apiRouter = express.Router();
apiRouter.get("/status", (req, res) => res.json({ status: "API is running" }));
apiRouter.get("/health", (req, res) => res.json({ health: "OK" }));

app.use("/api", apiRouter);

console.log("\n9. DYNAMIC ROUTE LOADING");

const routes = [
    { path: "/feature1", handler: (req, res) => res.json({ feature: "Feature 1" }) },
    { path: "/feature2", handler: (req, res) => res.json({ feature: "Feature 2" }) },
    { path: "/feature3", handler: (req, res) => res.json({ feature: "Feature 3" }) }
];

routes.forEach(route => {
    app.get(route.path, route.handler);
    console.log(`  Registered route: ${route.path}`);
});

console.log("\n10. ROUTE MOUNTING WITH PREFIX");

const authRoutes = require("./auth_routes");
try {
    app.use("/auth", authRoutes);
} catch (err) {
    console.log("  Auth routes module not found, skipping");
    
    const fallbackAuth = express.Router();
    fallbackAuth.get("/login", (req, res) => res.json({ message: "Login endpoint" }));
    fallbackAuth.post("/register", (req, res) => res.json({ message: "Register endpoint" }));
    app.use("/auth", fallbackAuth);
    console.log("  Using fallback auth routes");
}

console.log("\n11. ROUTE LISTING");

function listRoutes() {
    console.log("\nRegistered routes:");
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            const methods = Object.keys(middleware.route.methods).join(", ").toUpperCase();
            console.log(`  ${methods} ${middleware.route.path}`);
        } else if (middleware.name === "router") {
            middleware.handle.stack.forEach((handler) => {
                if (handler.route) {
                    const methods = Object.keys(handler.route.methods).join(", ").toUpperCase();
                    const basePath = middleware.regexp.source.replace(/\\\/\?/g, "").replace(/\^/g, "").replace(/\?/g, "");
                    console.log(`  ${methods} ${basePath}${handler.route.path}`);
                }
            });
        }
    });
}
listRoutes();

console.log("\n12. PRACTICE TASKS");

function createCRUDRouter(resourceName) {
    const router = express.Router();
    let data = [];
    let nextId = 1;
    
    router.get("/", (req, res) => {
        res.json(data);
    });
    
    router.get("/:id", (req, res) => {
        const item = data.find(i => i.id === parseInt(req.params.id));
        if (!item) return res.status(404).json({ error: `${resourceName} not found` });
        res.json(item);
    });
    
    router.post("/", (req, res) => {
        const newItem = { id: nextId++, ...req.body };
        data.push(newItem);
        res.status(201).json(newItem);
    });
    
    router.put("/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const index = data.findIndex(i => i.id === id);
        if (index === -1) return res.status(404).json({ error: `${resourceName} not found` });
        data[index] = { ...data[index], ...req.body, id };
        res.json(data[index]);
    });
    
    router.delete("/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const index = data.findIndex(i => i.id === id);
        if (index === -1) return res.status(404).json({ error: `${resourceName} not found` });
        data.splice(index, 1);
        res.status(204).send();
    });
    
    return router;
}

app.use("/api/books", createCRUDRouter("book"));
app.use("/api/movies", createCRUDRouter("movie"));

app.listen(PORT, () => {
    console.log(`\nRouting server running at http://localhost:${PORT}/`);
    console.log("\nAvailable endpoints:");
    console.log("  /api/users/*          - User routes");
    console.log("  /api/products/*       - Product routes");
    console.log("  /admin/*              - Admin routes");
    console.log("  /v1/*, /v2/*          - Versioned APIs");
    console.log("  /blogs/*/posts/*      - Nested routes");
    console.log("  /api/books/*          - CRUD for books");
    console.log("  /api/movies/*         - CRUD for movies");
    console.log("  /protected            - Protected route (needs auth header)");
    console.log("\nPress Ctrl+C to stop server");
});