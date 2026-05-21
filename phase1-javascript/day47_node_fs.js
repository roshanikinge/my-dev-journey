// Day 47: Node.js File System (fs module)

const fs = require("fs");
const path = require("path");

console.log("1. READING FILES");

// Create a sample file
const sampleContent = `Hello from Node.js!
This is a sample file created on ${new Date().toLocaleString()}
Line 3 of the file
Line 4 of the file
`;

fs.writeFileSync("sample.txt", sampleContent);
console.log("Created sample.txt");

// Read file synchronously
try {
    const data = fs.readFileSync("sample.txt", "utf8");
    console.log("Sync read:\n", data);
} catch (err) {
    console.error("Error reading file:", err);
}

// Read file asynchronously
fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Async read error:", err);
    } else {
        console.log("Async read:\n", data);
    }
});

console.log("\n2. WRITING FILES");

// Write file (overwrites)
fs.writeFile("output.txt", "This is new content", (err) => {
    if (err) console.error(err);
    else console.log("File written: output.txt");
});

// Append to file
fs.appendFile("output.txt", "\nAppended line", (err) => {
    if (err) console.error(err);
    else console.log("Content appended to output.txt");
});

console.log("\n3. FILE INFORMATION");
fs.stat("sample.txt", (err, stats) => {
    if (err) console.error(err);
    else {
        console.log("File size:", stats.size, "bytes");
        console.log("Is file:", stats.isFile());
        console.log("Is directory:", stats.isDirectory());
        console.log("Created:", stats.birthtime);
        console.log("Modified:", stats.mtime);
    }
});

console.log("\n4. DIRECTORY OPERATIONS");
const testDir = "test_folder";

if (!fs.existsSync(testDir)) {
    fs.mkdir(testDir, (err) => {
        if (err) console.error(err);
        else console.log("Directory created:", testDir);
        
        // Create file inside directory
        fs.writeFile(path.join(testDir, "inside.txt"), "File inside folder", (err) => {
            if (err) console.error(err);
            else console.log("File created inside directory");
        });
    });
} else {
    console.log("Directory already exists:", testDir);
}

console.log("\n5. LISTING DIRECTORY CONTENTS");
fs.readdir(".", (err, files) => {
    if (err) console.error(err);
    else {
        console.log("Files in current directory:");
        files.forEach(file => {
            const stats = fs.statSync(file);
            const type = stats.isDirectory() ? "[DIR]" : "[FILE]";
            console.log(`  ${type} ${file}`);
        });
    }
});

console.log("\n6. RENAMING AND DELETING FILES");
// Create a temp file for deletion
fs.writeFileSync("temp_to_delete.txt", "This will be deleted");
console.log("Created temp_to_delete.txt");

setTimeout(() => {
    if (fs.existsSync("temp_to_delete.txt")) {
        fs.unlink("temp_to_delete.txt", (err) => {
            if (err) console.error(err);
            else console.log("Deleted: temp_to_delete.txt");
        });
    }
}, 2000);

console.log("\n7. WATCHING FILE CHANGES");
const watchFile = "watched.txt";
fs.writeFileSync(watchFile, "Initial content");
console.log(`Watching ${watchFile} for changes...`);

fs.watch(watchFile, (eventType, filename) => {
    console.log(`File ${filename} changed: ${eventType}`);
});

// Make a change after 3 seconds
setTimeout(() => {
    fs.appendFile(watchFile, "\nNew line added", (err) => {
        if (err) console.error(err);
        else console.log("Change made to watched file");
    });
}, 3000);

console.log("\n8. PRACTICE TASKS");
function copyFile(source, destination) {
    fs.readFile(source, "utf8", (err, data) => {
        if (err) {
            console.error(`Cannot read ${source}:`, err.message);
            return;
        }
        fs.writeFile(destination, data, (err) => {
            if (err) console.error(`Cannot write ${destination}:`, err.message);
            else console.log(`Copied ${source} to ${destination}`);
        });
    });
}
copyFile("sample.txt", "sample_copy.txt");

function countLines(filename) {
    fs.readFile(filename, "utf8", (err, data) => {
        if (err) {
            console.error(`Cannot read ${filename}:`, err.message);
            return;
        }
        const lines = data.split("\n").length;
        console.log(`${filename} has ${lines} lines`);
    });
}
countLines("sample.txt");

console.log("\nDay 47 completed - File System operations");