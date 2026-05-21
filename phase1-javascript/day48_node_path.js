// Day 48: Node.js Path Module

const path = require("path");

console.log("1. GETTING PATH COMPONENTS");
const filePath = "/users/john/documents/file.txt";
const windowsPath = "C:\\Users\\John\\Documents\\file.txt";

console.log("File path:", filePath);
console.log("Directory name:", path.dirname(filePath));
console.log("Base name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("File name without extension:", path.basename(filePath, ".txt"));

console.log("\n2. JOINING PATHS");
console.log("Join 'users', 'john', 'docs':", path.join("users", "john", "docs"));
console.log("Join with .. (parent):", path.join("/users", "john", "..", "docs"));
console.log("Join with . (current):", path.join("/users", "john", ".", "docs"));

console.log("\n3. RESOLVING PATHS");
console.log("Resolve 'docs/file.txt':", path.resolve("docs/file.txt"));
console.log("Resolve from root:", path.resolve("/root", "folder", "file.txt"));
console.log("Resolve with multiple:", path.resolve("users", "john", "file.txt"));

console.log("\n4. NORMALIZING PATHS");
const messyPath = "/users//john/../john/docs/./file.txt";
console.log("Messy path:", messyPath);
console.log("Normalized:", path.normalize(messyPath));

console.log("\n5. PARSING PATHS");
const parsed = path.parse("/users/john/docs/file.txt");
console.log("Parsed object:", parsed);
console.log("Root:", parsed.root);
console.log("Dir:", parsed.dir);
console.log("Base:", parsed.base);
console.log("Name:", parsed.name);
console.log("Ext:", parsed.ext);

const formatted = path.format({
    root: "/",
    dir: "/users/john/docs",
    base: "file.txt",
    name: "file",
    ext: ".txt"
});
console.log("Formatted from object:", formatted);

console.log("\n6. WORKING WITH ABSOLUTE PATHS");
console.log("Is '/users/file.txt' absolute?", path.isAbsolute("/users/file.txt"));
console.log("Is './file.txt' absolute?", path.isAbsolute("./file.txt"));
console.log("Is 'file.txt' absolute?", path.isAbsolute("file.txt"));

console.log("\n7. PLATFORM SPECIFIC SEPARATORS");
console.log("Path separator:", path.sep);
console.log("Path delimiter:", path.delimiter);
console.log("POSIX vs Windows example:");

if (path.sep === "\\") {
    console.log("Running on Windows");
    const winPath = "C:\\Users\\John\\file.txt";
    console.log("Windows path parts:", winPath.split(path.sep));
} else {
    console.log("Running on POSIX (Linux/Mac)");
    const posixPath = "/users/john/file.txt";
    console.log("POSIX path parts:", posixPath.split(path.sep));
}

console.log("\n8. RELATIVE PATHS");
const from = "/users/john/docs/file.txt";
const to = "/users/john/projects/app.js";
console.log(`From: ${from}`);
console.log(`To: ${to}`);
console.log("Relative path:", path.relative(from, to));

console.log("\n9. PRACTICE TASKS");

function getFileInfo(filepath) {
    const info = path.parse(filepath);
    return {
        fileName: info.name,
        extension: info.ext,
        directory: info.dir,
        fullPath: path.resolve(filepath)
    };
}

const testPath = "documents/project/script.js";
console.log("File info for:", testPath);
console.log(getFileInfo(testPath));

function isValidPath(basePath, targetPath) {
    const resolved = path.resolve(basePath, targetPath);
    return resolved.startsWith(path.resolve(basePath));
}

const base = "/home/user";
console.log(`Is '${base}/../etc/passwd' valid?`, isValidPath(base, "../etc/passwd"));
console.log(`Is '${base}/docs/file.txt' valid?`, isValidPath(base, "docs/file.txt"));

function listFilesWithExtension(dir, extension) {
    const fs = require("fs");
    if (!fs.existsSync(dir)) {
        console.log(`Directory ${dir} does not exist`);
        return [];
    }
    const files = fs.readdirSync(dir);
    const matched = files.filter(file => path.extname(file) === extension);
    console.log(`Files with ${extension} in ${dir}:`, matched);
    return matched;
}
listFilesWithExtension(".", ".js");

console.log("\nDay 48 completed - Path module covered.");