// Day 54: Node.js Crypto Module

const crypto = require("crypto");

console.log("1. HASHING (SHA-256)");

const text = "Hello World";
const hash = crypto.createHash("sha256").update(text).digest("hex");
console.log("Original text:", text);
console.log("SHA-256 hash:", hash);
console.log("Hash length:", hash.length, "characters");

const hashBase64 = crypto.createHash("sha256").update(text).digest("base64");
console.log("Base64 hash:", hashBase64);

console.log("\n2. DIFFERENT HASH ALGORITHMS");

const algorithms = ["md5", "sha1", "sha256", "sha512"];
algorithms.forEach(algo => {
    const hash = crypto.createHash(algo).update("password123").digest("hex");
    console.log(`${algo}: ${hash.substring(0, 32)}...`);
});

console.log("\n3. HASHING WITH SALT");

function hashWithSalt(password, salt) {
    return crypto.createHash("sha256").update(password + salt).digest("hex");
}

const password = "mySecretPassword";
const salt = crypto.randomBytes(16).toString("hex");
const hashedPassword = hashWithSalt(password, salt);

console.log("Password:", password);
console.log("Salt:", salt);
console.log("Hashed password:", hashedPassword);

console.log("\n4. HMAC (Hash-based Message Authentication Code)");

const secretKey = "my-secret-key";
const message = "Important message";
const hmac = crypto.createHmac("sha256", secretKey).update(message).digest("hex");
console.log("Message:", message);
console.log("HMAC:", hmac);

const hmac2 = crypto.createHmac("sha256", secretKey).update(message).digest("hex");
console.log("HMAC (same key):", hmac2);
console.log("HMAC matches:", hmac === hmac2);

const wrongHmac = crypto.createHmac("sha256", "wrong-key").update(message).digest("hex");
console.log("HMAC with wrong key:", wrongHmac);
console.log("Matches:", hmac === wrongHmac);

console.log("\n5. RANDOM BYTES GENERATION");

const randomBytes = crypto.randomBytes(16);
console.log("Random bytes (hex):", randomBytes.toString("hex"));
console.log("Random bytes (base64):", randomBytes.toString("base64"));

const randomInt = crypto.randomInt(1, 100);
console.log("Random integer (1-100):", randomInt);

crypto.randomBytes(8, (err, buffer) => {
    if (err) console.error(err);
    else console.log("Async random bytes:", buffer.toString("hex"));
});

console.log("\n6. SYMMETRIC ENCRYPTION (AES)");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text, key, iv) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

function decrypt(encrypted, key, iv) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}

const plainText = "This is a secret message";
const encrypted = encrypt(plainText, key, iv);
const decrypted = decrypt(encrypted, key, iv);

console.log("Plain text:", plainText);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);
console.log("Success:", plainText === decrypted);

console.log("\n7. PASSWORD HASHING (PBKDF2)");

const userPassword = "user_password123";
const userSalt = crypto.randomBytes(16).toString("hex");

crypto.pbkdf2(userPassword, userSalt, 100000, 64, "sha512", (err, derivedKey) => {
    if (err) console.error(err);
    else {
        console.log("PBKDF2 hash:", derivedKey.toString("hex"));
        console.log("Iterations: 100,000");
        console.log("Key length: 64 bytes");
    }
});

console.log("\n8. SCrypt (Memory-hard key derivation)");

const scryptPassword = "secure_password";
const scryptSalt = crypto.randomBytes(16);

crypto.scrypt(scryptPassword, scryptSalt, 64, { N: 16384, r: 8, p: 1 }, (err, derivedKey) => {
    if (err) console.error(err);
    else {
        console.log("scrypt derived key:", derivedKey.toString("hex").substring(0, 64) + "...");
        console.log("Parameters: N=16384, r=8, p=1");
    }
});

console.log("\n9. CONSTANT TIME COMPARISON");

const userInput = "password123";
const storedHash = crypto.createHash("sha256").update("password123").digest();
const userHash = crypto.createHash("sha256").update(userInput).digest();

const isEqual = crypto.timingSafeEqual(userHash, storedHash);
console.log("Timing-safe compare:", isEqual);

const wrongInput = "wrongpassword";
const wrongHash = crypto.createHash("sha256").update(wrongInput).digest();
const isEqualWrong = crypto.timingSafeEqual(wrongHash, storedHash);
console.log("Wrong password compare:", isEqualWrong);

console.log("\n10. PRACTICE TASKS");

function generateAPIKey() {
    return crypto.randomBytes(32).toString("hex");
}

console.log("Generated API Key:", generateAPIKey());

function simpleToken(length = 32) {
    return crypto.randomBytes(length).toString("base64").substring(0, length);
}

console.log("Simple token:", simpleToken(24));

function hashFile(content) {
    return crypto.createHash("sha256").update(content).digest("hex");
}

const fileContent = "This is the content of a file";
const fileHash = hashFile(fileContent);
console.log("File hash:", fileHash);

function createChecksum(data) {
    return crypto.createHash("md5").update(data).digest("hex");
}

const data1 = "Hello World";
const data2 = "Hello World";
const data3 = "Hello World!";

console.log("Checksum 1:", createChecksum(data1));
console.log("Checksum 2:", createChecksum(data2));
console.log("Checksum matches:", createChecksum(data1) === createChecksum(data2));
console.log("Checksum 3:", createChecksum(data3));

console.log("\nDay 54 completed - Crypto module covered.");