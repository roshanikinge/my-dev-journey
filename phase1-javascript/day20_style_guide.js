// DAY 20: JS Style Guide (Conventions)

console.log("1. NAMING CONVENTIONS");
let userName = "John"; // camelCase for variables
const MAX_COUNT = 100; // UPPER_SNAKE_CASE for constants
let $private = "private"; // $ for some libraries
let _internal = "internal"; // _ for internal use
class UserAccount {} // PascalCase for classes
function calculateTotal() {} // camelCase for functions

console.log("2. INDENTATION AND SPACING");
function goodExample() {
    let x = 1;
    let y = 2;
    if (x < y) {
        console.log("x is less");
    }
}
goodExample();

console.log("3. SEMICOLONS");
let a = 10; // semicolon recommended
let b = 20;
let c = a + b;
console.log("Sum:", c);

console.log("4. QUOTES");
let single = 'single quotes';
let double = "double quotes"; // common in some projects
let backtick = `template literal`; // for interpolation

console.log("5. VARIABLE DECLARATION");
const PI = 3.14; // use const by default
let count = 0; // use let when reassignment needed
// avoid var

console.log("6. STRING CONCATENATION");
let name = "Alice";
let age = 30;
let msg1 = "Hello " + name + ", age " + age;
let msg2 = `Hello ${name}, age ${age}`; // preferred
console.log(msg2);

console.log("7. OBJECT LITERALS");
let user = {
    name: "Bob",
    age: 25,
    greet() { // shorthand method
        return "Hi";
    }
};
console.log(user.greet());

console.log("8. ARRAY SYNTAX");
let arr = [1, 2, 3]; // use literal
let copy = [...arr]; // spread for copy

console.log("9. FUNCTION DECLARATION");
// function declaration
function add(a, b) {
    return a + b;
}
// arrow function for callbacks
const double = n => n * 2;
console.log("Double 5:", double(5));

console.log("10. CONDITIONALS");
let score = 85;
// use braces even for single line
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

console.log("11. EQUALITY CHECKS");
let val = "10";
if (val === 10) {
    console.log("Strict equality - false");
}
if (val == 10) {
    console.log("Loose equality - true but avoid");
}
// always prefer === and !==

console.log("12. COMMENTS");
// single line comment
/*
   multi-line
   comment
*/

console.log("13. BEST PRACTICES SUMMARY");
console.log("- Use const and let, avoid var");
console.log("- Use === instead of ==");
console.log("- Use template literals for strings");
console.log("- Use arrow functions for callbacks");
console.log("- Always use semicolons");

console.log("Day 20 completed - JS Style Guide covered.");