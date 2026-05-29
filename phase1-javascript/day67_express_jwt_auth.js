// Day 67: Express.js Authentication (JWT)

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
const PORT = 3005;

const SECRET_KEY = "my_super_secret_key_12345";
const REFRESH_SECRET = "my_refresh_secret_key_67890";

app.use(express.json());

console.log("1. USER DATABASE (simulated)");

const users = [
    {
        id: 1,
        username: "john_doe",
        email: "john@example.com",
        password: "$2a$10$abc123...", // hashed password
        role: "user",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        username: "admin",
        email: "admin@example.com",
        password: "$2a$10$xyz789...",
        role: "admin",
        createdAt: new Date().toISOString()
    }
];

console.log("\n2. PASSWORD HASHING");

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

console.log("\n3. JWT TOKEN GENERATION");

function generateAccessToken(user) {
    return jwt.sign(
        { 
            id: user.id, 
            username: user.username, 
            email: user.email,
            role: user.role 
        },
        SECRET_KEY,
        { expiresIn: "15m" }
    );
}

function generateRefreshToken(user) {
    return jwt.sign(
        { id: user.id, username: user.username },
        REFRESH_SECRET,
        { expiresIn: "7d" }
    );
}

function verifyToken(token, secret = SECRET_KEY) {
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
}

console.log("\n4. REGISTRATION ENDPOINT");

app.post("/api/auth/register", async (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    
    if (password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters" });
    }
    
    const existingUser = users.find(u => u.email === email || u.username === username);
    if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
    }
    
    const hashedPassword = await hashPassword(password);
    
    const newUser = {
        id: users.length + 1,
        username,
        email,
        password: hashedPassword,
        role: "user",
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    
    const accessToken = generateAccessToken(newUser);
    const refreshToken = generateRefreshToken(newUser);
    
    const { password: _, ...userWithoutPassword } = newUser;
    
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: userWithoutPassword,
        accessToken,
        refreshToken
    });
});

console.log("\n5. LOGIN ENDPOINT");

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
    }
    
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: "Invalid credentials" });
    }
    
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    
    const { password: _, ...userWithoutPassword } = user;
    
    res.json({
        success: true,
        message: "Login successful",
        user: userWithoutPassword,
        accessToken,
        refreshToken
    });
});

console.log("\n6. TOKEN REFRESH ENDPOINT");

let refreshTokens = [];

app.post("/api/auth/refresh", (req, res) => {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
        return res.status(401).json({ error: "Refresh token required" });
    }
    
    const decoded = verifyToken(refreshToken, REFRESH_SECRET);
    if (!decoded) {
        return res.status(403).json({ error: "Invalid refresh token" });
    }
    
    const user = users.find(u => u.id === decoded.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    
    const newAccessToken = generateAccessToken(user);
    
    res.json({
        success: true,
        accessToken: newAccessToken
    });
});

console.log("\n7. AUTHENTICATION MIDDLEWARE");

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ error: "Access token required" });
    }
    
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(403).json({ error: "Invalid or expired token" });
    }
    
    req.user = decoded;
    next();
}

console.log("\n8. ROLE-BASED AUTHORIZATION");

function authorize(...roles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: "Insufficient permissions" });
        }
        
        next();
    };
}

console.log("\n9. PROTECTED ROUTES");

app.get("/api/profile", authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id);
    const { password, ...userWithoutPassword } = user;
    res.json({ user: userWithoutPassword });
});

app.get("/api/admin/users", authenticateToken, authorize("admin"), (req, res) => {
    const usersWithoutPasswords = users.map(({ password, ...user }) => user);
    res.json({ users: usersWithoutPasswords });
});

app.get("/api/dashboard", authenticateToken, (req, res) => {
    res.json({
        message: `Welcome ${req.user.username}`,
        role: req.user.role,
        accessLevel: req.user.role === "admin" ? "full" : "limited"
    });
});

console.log("\n10. LOGOUT ENDPOINT");

app.post("/api/auth/logout", authenticateToken, (req, res) => {
    refreshTokens = refreshTokens.filter(t => t !== req.body.refreshToken);
    res.json({ success: true, message: "Logged out successfully" });
});

console.log("\n11. PASSWORD RESET");

const resetTokens = new Map();

app.post("/api/auth/forgot-password", async (req, res) => {
    const { email } = req.body;
    
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    
    const resetToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });
    resetTokens.set(email, resetToken);
    
    console.log(`Reset token for ${email}: ${resetToken}`);
    
    res.json({
        success: true,
        message: "Password reset email sent",
        resetToken: resetToken
    });
});

app.post("/api/auth/reset-password", async (req, res) => {
    const { email, token, newPassword } = req.body;
    
    if (!email || !token || !newPassword) {
        return res.status(400).json({ error: "All fields required" });
    }
    
    const storedToken = resetTokens.get(email);
    if (!storedToken || storedToken !== token) {
        return res.status(400).json({ error: "Invalid or expired token" });
    }
    
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(400).json({ error: "Invalid token" });
    }
    
    const user = users.find(u => u.id === decoded.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    
    user.password = await hashPassword(newPassword);
    resetTokens.delete(email);
    
    res.json({ success: true, message: "Password reset successfully" });
});

console.log("\n12. LOGIN ATTEMPT TRACKING");

const loginAttempts = new Map();

function trackLoginAttempts(ip) {
    const now = Date.now();
    const attempts = loginAttempts.get(ip) || [];
    const recentAttempts = attempts.filter(t => now - t < 15 * 60 * 1000);
    
    if (recentAttempts.length >= 5) {
        return false;
    }
    
    recentAttempts.push(now);
    loginAttempts.set(ip, recentAttempts);
    return true;
}

console.log("\n13. PRACTICE TASKS");

app.get("/api/verify-token", authenticateToken, (req, res) => {
    res.json({
        valid: true,
        user: req.user,
        expiresIn: "Token valid"
    });
});

app.get("/api/me/permissions", authenticateToken, (req, res) => {
    const permissions = {
        user: ["read:profile", "update:profile"],
        admin: ["read:profile", "update:profile", "read:users", "delete:users", "manage:system"]
    };
    
    res.json({
        role: req.user.role,
        permissions: permissions[req.user.role] || permissions.user
    });
});

app.post("/api/auth/change-password", authenticateToken, async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    
    if (!currentPassword || !newPassword) {
        return res.status(400).json({ error: "Current and new password required" });
    }
    
    if (newPassword.length < 6) {
        return res.status(400).json({ error: "New password must be at least 6 characters" });
    }
    
    const user = users.find(u => u.id === req.user.id);
    const isValid = await bcrypt.compare(currentPassword, user.password);
    
    if (!isValid) {
        return res.status(401).json({ error: "Current password is incorrect" });
    }
    
    user.password = await hashPassword(newPassword);
    
    res.json({ success: true, message: "Password changed successfully" });
});

app.listen(PORT, () => {
    console.log(`\nJWT Auth server running at http://localhost:${PORT}/`);
    console.log("\nAvailable endpoints:");
    console.log("  POST   /api/auth/register     - Register new user");
    console.log("  POST   /api/auth/login        - Login (get tokens)");
    console.log("  POST   /api/auth/refresh      - Refresh access token");
    console.log("  POST   /api/auth/logout       - Logout");
    console.log("  GET    /api/profile           - Get user profile (protected)");
    console.log("  GET    /api/dashboard         - User dashboard (protected)");
    console.log("  GET    /api/admin/users       - Admin only (admin role)");
    console.log("  POST   /api/auth/forgot-password - Request password reset");
    console.log("  POST   /api/auth/reset-password  - Reset password with token");
    console.log("  POST   /api/auth/change-password - Change password (authenticated)");
    console.log("  GET    /api/verify-token      - Verify JWT token");
    console.log("\nTest credentials:");
    console.log("  User: john@example.com / password123");
    console.log("  Admin: admin@example.com / admin123");
    console.log("\nPress Ctrl+C to stop server");
});