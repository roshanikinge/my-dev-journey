
// DAY 2: JavaScript Fundamentals
// Topics: Introduction, Where To, Output, Syntax



// 1. WHAT IS JAVASCRIPT?

console.log("========== 1. INTRODUCTION ==========");
console.log("JavaScript = programming language of the web.");
console.log("It runs in:");
console.log("  - Browsers (Chrome, Firefox, Edge)");
console.log("  - Servers (Node.js, Deno)");
console.log("  - Mobile apps (React Native)");
console.log("  - Desktop apps (Electron)");
console.log("\n");


// 2. WHERE TO PUT JAVASCRIPT

console.log("========== 2. WHERE TO PUT JS ==========");
console.log("Three ways to add JS to HTML:");
console.log("  1. Inline (inside HTML element) – not recommended");
console.log("  2. Internal (script tag inside HTML)");
console.log("  3. External (separate .js file linked) – BEST for large projects");
console.log("We are now writing an external .js file running with Node.js.\n");


// 3. JS OUTPUT METHODS (4 ways)

console.log("========== 3. JS OUTPUT METHODS ==========");

console.log("1. console.log() - outputs to console (Node terminal or browser dev tools)");
console.log("2. document.write() - only in browser, writes directly to HTML page");
console.log("3. alert() - creates popup alert box (browser only)");
console.log("4. innerHTML - changes content of HTML elements (browser only)");
console.log("Note: Since we use Node.js, only console.log works here.\n");

console.log("Demonstrating different data types in output:");
console.log("Numbers:", 42);
console.log("Strings:", "Hello World");
console.log("Booleans:", true, false);
console.log("Arrays:", [1, 2, 3]);
console.log("Objects:", { name: "JS", year: 1995 });
console.log("\n");


// 4. JS SYNTAX (rules)

console.log("========== 4. JS SYNTAX ==========");

// 4.1 Statements end with semicolon (optional but recommended)
let firstName = "John";
let lastName = "Doe";
console.log("Full name:", firstName, lastName);

// 4.2 Code blocks use { } – for functions, loops, conditions
function greet() {
    console.log("This code is inside a block");
}
greet();

// 4.3 Case sensitivity – myVar and myvar are different
let myVar = 10;
let myvar = 20;
console.log("myVar =", myVar, "| myvar =", myvar);

// 4.4 Comments
// This is a single-line comment
/* This is a 
   multi-line 
   comment */

// 4.5 Whitespace is ignored – you can add spaces for readability
let sum = 10 + 5;
let sum2 = 10 + 5;
console.log("Sum =", sum);

// 4.6 Naming conventions (camelCase is standard)
let userAge = 25;
let user_age = 25;
let UserAge = 25;
console.log("camelCase:", userAge, "| snake_case:", user_age, "| PascalCase:", UserAge);
console.log("\n");


// 5. PRACTICE TASK


const currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

console.log("Current hour (UTC):", currentHour);
console.log(greeting);
console.log("Day 2 completed – you learned where JS runs, output methods, and syntax rules.");

console.log("\nQuick type check:");
console.log("typeof 42 ->", typeof 42);
console.log('typeof "hello" ->', typeof "hello");
console.log("typeof true ->", typeof true);
console.log("typeof undefined ->", typeof undefined);
console.log("typeof null ->", typeof null);