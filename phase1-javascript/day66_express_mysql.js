// Day 66: Express.js with MySQL Database

const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("1. DATABASE CONNECTION");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "express_demo",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise();

async function testConnection() {
    try {
        const [rows] = await promisePool.query("SELECT 1 + 1 AS result");
        console.log("Database connected successfully");
        return true;
    } catch (err) {
        console.error("Database connection failed:", err.message);
        console.log("\nPlease ensure:");
        console.log("  1. MySQL is installed and running");
        console.log("  2. Database 'express_demo' exists");
        console.log("  3. Username/password are correct");
        return false;
    }
}

console.log("\n2. CREATE TABLES");

async function createTables() {
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            age INT,
            city VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    
    const createProductsTable = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            stock INT DEFAULT 0,
            category VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    
    const createOrdersTable = `
        CREATE TABLE IF NOT EXISTS orders (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            product_id INT,
            quantity INT NOT NULL,
            order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (product_id) REFERENCES products(id)
        )
    `;
    
    try {
        await promisePool.query(createUsersTable);
        console.log("Users table created/verified");
        
        await promisePool.query(createProductsTable);
        console.log("Products table created/verified");
        
        await promisePool.query(createOrdersTable);
        console.log("Orders table created/verified");
    } catch (err) {
        console.error("Table creation error:", err.message);
    }
}

console.log("\n3. USER CRUD OPERATIONS");

app.get("/api/users", async (req, res) => {
    try {
        const [rows] = await promisePool.query("SELECT * FROM users ORDER BY id DESC");
        res.json({ success: true, data: rows, count: rows.length });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/users/:id", async (req, res) => {
    try {
        const [rows] = await promisePool.query("SELECT * FROM users WHERE id = ?", [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ success: true, data: rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/api/users", async (req, res) => {
    const { name, email, age, city } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    
    try {
        const [result] = await promisePool.query(
            "INSERT INTO users (name, email, age, city) VALUES (?, ?, ?, ?)",
            [name, email, age || null, city || null]
        );
        
        const [newUser] = await promisePool.query("SELECT * FROM users WHERE id = ?", [result.insertId]);
        res.status(201).json({ success: true, data: newUser[0] });
    } catch (err) {
        if (err.code === "ER_DUP_ENTRY") {
            res.status(400).json({ error: "Email already exists" });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
});

app.put("/api/users/:id", async (req, res) => {
    const { name, email, age, city } = req.body;
    const userId = req.params.id;
    
    try {
        const [result] = await promisePool.query(
            "UPDATE users SET name = COALESCE(?, name), email = COALESCE(?, email), age = COALESCE(?, age), city = COALESCE(?, city) WHERE id = ?",
            [name, email, age, city, userId]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        
        const [updated] = await promisePool.query("SELECT * FROM users WHERE id = ?", [userId]);
        res.json({ success: true, data: updated[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/api/users/:id", async (req, res) => {
    try {
        const [result] = await promisePool.query("DELETE FROM users WHERE id = ?", [req.params.id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        
        res.json({ success: true, message: "User deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

console.log("\n4. PRODUCT CRUD OPERATIONS");

app.get("/api/products", async (req, res) => {
    const { category, minPrice, maxPrice } = req.query;
    let query = "SELECT * FROM products WHERE 1=1";
    const params = [];
    
    if (category) {
        query += " AND category = ?";
        params.push(category);
    }
    
    if (minPrice) {
        query += " AND price >= ?";
        params.push(minPrice);
    }
    
    if (maxPrice) {
        query += " AND price <= ?";
        params.push(maxPrice);
    }
    
    query += " ORDER BY id DESC";
    
    try {
        const [rows] = await promisePool.query(query, params);
        res.json({ success: true, data: rows, count: rows.length });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/api/products", async (req, res) => {
    const { name, price, stock, category } = req.body;
    
    if (!name || price === undefined) {
        return res.status(400).json({ error: "Name and price are required" });
    }
    
    try {
        const [result] = await promisePool.query(
            "INSERT INTO products (name, price, stock, category) VALUES (?, ?, ?, ?)",
            [name, price, stock || 0, category || null]
        );
        
        const [newProduct] = await promisePool.query("SELECT * FROM products WHERE id = ?", [result.insertId]);
        res.status(201).json({ success: true, data: newProduct[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/api/products/:id/stock", async (req, res) => {
    const { quantity } = req.body;
    
    if (quantity === undefined) {
        return res.status(400).json({ error: "Quantity is required" });
    }
    
    try {
        const [result] = await promisePool.query(
            "UPDATE products SET stock = stock + ? WHERE id = ?",
            [quantity, req.params.id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        
        const [updated] = await promisePool.query("SELECT * FROM products WHERE id = ?", [req.params.id]);
        res.json({ success: true, data: updated[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

console.log("\n5. JOINS AND COMPLEX QUERIES");

app.get("/api/orders", async (req, res) => {
    const query = `
        SELECT 
            o.id as order_id,
            o.quantity,
            o.order_date,
            u.id as user_id,
            u.name as user_name,
            u.email as user_email,
            p.id as product_id,
            p.name as product_name,
            p.price,
            (o.quantity * p.price) as total_amount
        FROM orders o
        JOIN users u ON o.user_id = u.id
        JOIN products p ON o.product_id = p.id
        ORDER BY o.order_date DESC
    `;
    
    try {
        const [rows] = await promisePool.query(query);
        res.json({ success: true, data: rows, count: rows.length });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/api/orders", async (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    
    if (!user_id || !product_id || !quantity) {
        return res.status(400).json({ error: "user_id, product_id, and quantity are required" });
    }
    
    const connection = await promisePool.getConnection();
    
    try {
        await connection.beginTransaction();
        
        const [product] = await connection.query("SELECT price, stock FROM products WHERE id = ?", [product_id]);
        if (product.length === 0) {
            throw new Error("Product not found");
        }
        
        if (product[0].stock < quantity) {
            throw new Error("Insufficient stock");
        }
        
        await connection.query(
            "INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)",
            [user_id, product_id, quantity]
        );
        
        await connection.query(
            "UPDATE products SET stock = stock - ? WHERE id = ?",
            [quantity, product_id]
        );
        
        await connection.commit();
        res.status(201).json({ success: true, message: "Order created" });
    } catch (err) {
        await connection.rollback();
        res.status(400).json({ error: err.message });
    } finally {
        connection.release();
    }
});

console.log("\n6. SEARCH AND FILTER");

app.get("/api/search/users", async (req, res) => {
    const { q, field = "name" } = req.query;
    
    if (!q) {
        return res.status(400).json({ error: "Search query required" });
    }
    
    const allowedFields = ["name", "email", "city"];
    if (!allowedFields.includes(field)) {
        return res.status(400).json({ error: "Invalid search field" });
    }
    
    try {
        const query = `SELECT * FROM users WHERE ${field} LIKE ?`;
        const [rows] = await promisePool.query(query, [`%${q}%`]);
        res.json({ success: true, data: rows, count: rows.length });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/stats", async (req, res) => {
    const stats = {};
    
    try {
        const [userCount] = await promisePool.query("SELECT COUNT(*) as count FROM users");
        stats.totalUsers = userCount[0].count;
        
        const [productCount] = await promisePool.query("SELECT COUNT(*) as count FROM products");
        stats.totalProducts = productCount[0].count;
        
        const [totalSales] = await promisePool.query(`
            SELECT SUM(o.quantity * p.price) as total 
            FROM orders o 
            JOIN products p ON o.product_id = p.id
        `);
        stats.totalSales = totalSales[0].total || 0;
        
        const [avgAge] = await promisePool.query("SELECT AVG(age) as avg FROM users WHERE age IS NOT NULL");
        stats.averageUserAge = Math.round(avgAge[0].avg) || 0;
        
        const [topProduct] = await promisePool.query(`
            SELECT p.name, SUM(o.quantity) as total_sold
            FROM orders o
            JOIN products p ON o.product_id = p.id
            GROUP BY p.id
            ORDER BY total_sold DESC
            LIMIT 1
        `);
        stats.topProduct = topProduct[0] || null;
        
        res.json({ success: true, data: stats });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

console.log("\n7. BULK OPERATIONS");

app.post("/api/users/bulk", async (req, res) => {
    const { users } = req.body;
    
    if (!users || !Array.isArray(users) || users.length === 0) {
        return res.status(400).json({ error: "Users array required" });
    }
    
    const values = users.map(u => [u.name, u.email, u.age || null, u.city || null]);
    const query = "INSERT INTO users (name, email, age, city) VALUES ?";
    
    try {
        const [result] = await promisePool.query(query, [values]);
        res.status(201).json({
            success: true,
            insertedCount: result.affectedRows,
            message: `${result.affectedRows} users inserted`
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

console.log("\n8. SEED INITIAL DATA");

async function seedData() {
    try {
        const [existingUsers] = await promisePool.query("SELECT COUNT(*) as count FROM users");
        
        if (existingUsers[0].count === 0) {
            await promisePool.query(`
                INSERT INTO users (name, email, age, city) VALUES
                ('John Doe', 'john@example.com', 28, 'New York'),
                ('Jane Smith', 'jane@example.com', 32, 'Los Angeles'),
                ('Bob Johnson', 'bob@example.com', 25, 'Chicago'),
                ('Alice Brown', 'alice@example.com', 30, 'Houston')
            `);
            console.log("Sample users inserted");
        }
        
        const [existingProducts] = await promisePool.query("SELECT COUNT(*) as count FROM products");
        
        if (existingProducts[0].count === 0) {
            await promisePool.query(`
                INSERT INTO products (name, price, stock, category) VALUES
                ('Laptop', 999.99, 10, 'Electronics'),
                ('Mouse', 29.99, 50, 'Electronics'),
                ('Keyboard', 79.99, 30, 'Electronics'),
                ('Monitor', 299.99, 15, 'Electronics')
            `);
            console.log("Sample products inserted");
        }
    } catch (err) {
        console.error("Seed error:", err.message);
    }
}

console.log("\n9. PRACTICE TASKS");

app.get("/api/users/with-orders", async (req, res) => {
    const query = `
        SELECT 
            u.id, u.name, u.email,
            COUNT(o.id) as order_count,
            COALESCE(SUM(o.quantity * p.price), 0) as total_spent
        FROM users u
        LEFT JOIN orders o ON u.id = o.user_id
        LEFT JOIN products p ON o.product_id = p.id
        GROUP BY u.id
        ORDER BY total_spent DESC
    `;
    
    try {
        const [rows] = await promisePool.query(query);
        res.json({ success: true, data: rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/products/low-stock", async (req, res) => {
    const threshold = req.query.threshold || 5;
    
    try {
        const [rows] = await promisePool.query(
            "SELECT * FROM products WHERE stock <= ? ORDER BY stock ASC",
            [threshold]
        );
        res.json({ success: true, data: rows, lowStockCount: rows.length });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/reports/monthly-sales", async (req, res) => {
    const query = `
        SELECT 
            DATE_FORMAT(order_date, '%Y-%m') as month,
            COUNT(*) as order_count,
            SUM(quantity * p.price) as revenue
        FROM orders o
        JOIN products p ON o.product_id = p.id
        GROUP BY DATE_FORMAT(order_date, '%Y-%m')
        ORDER BY month DESC
    `;
    
    try {
        const [rows] = await promisePool.query(query);
        res.json({ success: true, data: rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

async function initialize() {
    const connected = await testConnection();
    if (connected) {
        await createTables();
        await seedData();
        
        app.listen(PORT, () => {
            console.log(`\nMySQL server running at http://localhost:${PORT}/`);
            console.log("\nAvailable endpoints:");
            console.log("  GET    /api/users              - Get all users");
            console.log("  GET    /api/users/:id          - Get user by ID");
            console.log("  POST   /api/users              - Create user");
            console.log("  PUT    /api/users/:id          - Update user");
            console.log("  DELETE /api/users/:id          - Delete user");
            console.log("  GET    /api/products           - Get products (with filters)");
            console.log("  POST   /api/products           - Create product");
            console.log("  GET    /api/orders             - Get orders with joins");
            console.log("  POST   /api/orders             - Create order (transaction)");
            console.log("  GET    /api/search/users       - Search users");
            console.log("  GET    /api/stats              - Statistics dashboard");
            console.log("  GET    /api/users/with-orders  - Users with order summary");
            console.log("  GET    /api/products/low-stock - Low stock alert");
            console.log("\nPress Ctrl+C to stop server");
        });
    } else {
        console.log("\nCannot start server - database connection failed");
    }
}

initialize();