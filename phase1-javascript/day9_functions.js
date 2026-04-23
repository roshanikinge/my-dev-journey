// DAY 9: JS Functions

console.log(" 1. FUNCTION DECLARATION ");

function greet(name) {
    return "Hello " + name;
}
console.log(greet("Alice"));

function add(a, b) {
    return a + b;
}
console.log("Add 5 + 3 =", add(5, 3));

console.log("\n2. FUNCTION EXPRESSION ");

const multiply = function(x, y) {
    return x * y;
};
console.log("Multiply 4 * 5 =", multiply(4, 5));

const sayHi = function() {
    return "Hi there";
};
console.log(sayHi());

console.log("\n3. ARROW FUNCTIONS ");

const subtract = (a, b) => a - b;
console.log("Subtract 10 - 4 =", subtract(10, 4));

const double = n => n * 2;
console.log("Double 7 =", double(7));

const hello = () => "Hello World";
console.log(hello());

const square = (num) => {
    return num * num;
};
console.log("Square 6 =", square(6));

console.log("\n4. PARAMETERS AND ARGUMENTS ");

// Default parameters
function greetUser(name = "Guest") {
    return "Welcome " + name;
}
console.log(greetUser("John"));
console.log(greetUser());

// Rest parameters
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum 1,2,3,4 =", sumAll(1, 2, 3, 4));

console.log("\n 5. RETURN STATEMENT ");

function noReturn() {
    let x = 10;
}
console.log("No return:", noReturn());

function multipleReturns(age) {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor";
}
console.log("Age 20:", multipleReturns(20));

console.log("\n6. FUNCTION SCOPE ");

let globalVar = "I am global";

function testScope() {
    let localVar = "I am local";
    console.log("Inside function - globalVar:", globalVar);
    console.log("Inside function - localVar:", localVar);
}
testScope();
// console.log(localVar); // Error - not defined

console.log("\n 7. CLOSURES ");

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        return outerVar + innerVar;
    };
}
const closureExample = outerFunction(10);
console.log("Closure result:", closureExample(5));

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const myCounter = counter();
console.log("Counter:", myCounter());
console.log("Counter:", myCounter());
console.log("Counter:", myCounter());

console.log("\n8. CALLBACK FUNCTIONS ");

function processUserInput(name, callback) {
    let message = "Hello " + name;
    callback(message);
}
processUserInput("Alice", function(msg) {
    console.log("Callback received:", msg);
});

function calculate(a, b, operation) {
    return operation(a, b);
}
const sumResult = calculate(5, 3, function(x, y) {
    return x + y;
});
console.log("Callback sum:", sumResult);

console.log("\n 9. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ");

(function() {
    let privateVar = "This is private";
    console.log("IIFE executed:", privateVar);
})();

const result = (function(a, b) {
    return a * b;
})(4, 5);
console.log("IIFE result:", result);

console.log("\n10. PRACTICE TASKS ");

// Task 1: Check even or odd
function isEven(num) {
    return num % 2 === 0;
}
console.log("Is 7 even?", isEven(7));
console.log("Is 10 even?", isEven(10));

// Task 2: Find maximum of three numbers
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log("Max of 5, 12, 8:", maxOfThree(5, 12, 8));

// Task 3: Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("30°C to Fahrenheit:", celsiusToFahrenheit(30));

// Task 4: Factorial using recursion
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

// Task 5: Arrow function for array square
const squareArray = (arr) => arr.map(x => x * x);
console.log("Square [2,3,4]:", squareArray([2, 3, 4]));

console.log("\nDay 9 completed - JS Functions covered.");