// DAY 19: JS Debugging

console.log("1. CONSOLE METHODS");
console.log("Basic log:", "Hello");
console.error("This is an error");
console.warn("This is a warning");
console.info("This is info");
console.debug("Debug message");

console.log("2. CONSOLE TABLE");
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
console.table(users);

console.log("3. CONSOLE GROUP");
console.group("User Details");
console.log("Name: John");
console.log("Age: 28");
console.groupEnd();

console.log("4. CONSOLE TIME");
console.time("Loop time");
let sum = 0;
for (let i = 0; i < 1000000; i++) {
    sum += i;
}
console.timeEnd("Loop time");

console.log("5. CONSOLE COUNT");
function greet(name) {
    console.count("Greet called");
    return "Hello " + name;
}
greet("Alice");
greet("Bob");
greet("Alice");

console.log("6. CONSOLE TRACE");
function functionA() {
    functionB();
}
function functionB() {
    console.trace("Stack trace");
}
functionA();

console.log("7. DEBUGGER STATEMENT");
let x = 10;
let y = 20;
let z = x + y;
// Uncomment below to trigger debugger (opens browser dev tools)
// debugger;
console.log("Result:", z);

console.log("8. COMMON ERROR TYPES");
try {
    eval("2 +");
} catch (e) {
    console.log("SyntaxError example:", e.name);
}
try {
    null.toString();
} catch (e) {
    console.log("TypeError example:", e.name);
}
try {
    console.log(undefinedVar);
} catch (e) {
    console.log("ReferenceError example:", e.name);
}

console.log("9. PRACTICE TASKS");
function calculateAverage(numbers) {
    if (!Array.isArray(numbers)) {
        console.error("Input must be an array");
        return null;
    }
    if (numbers.length === 0) {
        console.warn("Array is empty");
        return 0;
    }
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let avg = total / numbers.length;
    console.log("Average calculated:", avg);
    return avg;
}
calculateAverage([10, 20, 30]);
calculateAverage([]);
calculateAverage("not array");

console.log("Day 19 completed - JS Debugging covered.");