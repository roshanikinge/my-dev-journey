
// DAY 6: JS Loops
// Topics: for, while, do...while, for...in, for...of, break, continue



// 1. FOR LOOP

console.log("1. FOR LOOP ");

// Basic for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// Sum of first 10 numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of 1 to 10:", sum);

// Multiplication table
let tableOf = 7;
console.log("Multiplication table of", tableOf);
for (let i = 1; i <= 10; i++) {
    console.log(tableOf, "x", i, "=", tableOf * i);
}

console.log("\n");


// 2. WHILE LOOP

console.log("2. WHILE LOOP /");

let count = 1;
while (count <= 5) {
    console.log("While count:", count);
    count++;
}

// Countdown
let timer = 5;
while (timer > 0) {
    console.log("Timer:", timer);
    timer--;
}
console.log("Blast off");

console.log("\n");

// 3. DO...WHILE LOOP (runs at least once)

console.log("3. DO...WHILE LOOP ");

let num = 1;
do {
    console.log("Do...while iteration:", num);
    num++;
} while (num <= 3);

// Condition false initially but still runs once
let conditionFalse = 10;
do {
    console.log("This runs even when condition is false. Value:", conditionFalse);
    conditionFalse++;
} while (conditionFalse < 10);

console.log("\n");


// 4. FOR...IN LOOP (iterates over object properties)

console.log("4. FOR...IN LOOP ");

let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ":", person[key]);
}

// Arrays with for...in (not recommended for arrays)
let colors = ["red", "green", "blue"];
for (let index in colors) {
    console.log("Index:", index, "Value:", colors[index]);
}

console.log("\n");


// 5. FOR...OF LOOP (iterates over iterable values)

console.log("5. FOR...OF LOOP ");

// Array
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// String
let message = "Hello";
for (let char of message) {
    console.log("Character:", char);
}

console.log("\n");


// 6. BREAK STATEMENT (exit loop early)

console.log(" 6. BREAK STATEMENT ");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Break at i =", i);
        break;
    }
    console.log("i:", i);
}

// Find first number greater than 10 in array
let numbers = [3, 7, 12, 8, 15];
let found = null;
for (let n of numbers) {
    if (n > 10) {
        found = n;
        break;
    }
}
console.log("First number > 10:", found);

console.log("\n");


// 7. CONTINUE STATEMENT (skip current iteration)

console.log("7. CONTINUE STATEMENT ");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("Odd number:", i);
}

// Skip vowels in a string
let str = "javascript";
let result = "";
for (let char of str) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        continue;
    }
    result += char;
}
console.log("Original:", str);
console.log("Without vowels:", result);

console.log("\n");


// 8. NESTED LOOPS

console.log("8. NESTED LOOPS ");

// Multiplication table from 1 to 3
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, "x", j, "=", i * j);
    }
    console.log("---");
}

// Pattern printing
console.log("Star pattern:");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

console.log("\n");


// 9. PRACTICE TASKS

console.log("9. PRACTICE TASKS ");

// Task 1: Factorial of a number
let factorialNum = 5;
let factorial = 1;
for (let i = 1; i <= factorialNum; i++) {
    factorial *= i;
}
console.log("Factorial of", factorialNum, "is", factorial);

// Task 2: Reverse a string
let original = "hello";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log("Original:", original, "Reversed:", reversed);

// Task 3: Print Fibonacci series up to 10 terms
let terms = 10;
let first = 0;
let second = 1;
console.log("Fibonacci series (first", terms, "terms):");
for (let i = 0; i < terms; i++) {
    console.log(first);
    let next = first + second;
    first = second;
    second = next;
}

// Task 4: Sum of array elements
let arr = [5, 10, 15, 20];
let total = 0;
for (let val of arr) {
    total += val;
}
console.log("Array:", arr);
console.log("Sum of array:", total);

console.log("\nDay 6 completed - JS Loops covered.");