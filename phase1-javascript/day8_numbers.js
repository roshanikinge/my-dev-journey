// DAY 8: JS Numbers

console.log(" 1. NUMBER BASICS ");

let intNum = 42;
let floatNum = 3.14;
let negativeNum = -10;
let bigNum = 1e6;

console.log("Integer:", intNum);
console.log("Float:", floatNum);
console.log("Negative:", negativeNum);
console.log("Scientific:", bigNum);

console.log("\n 2. NUMBER METHODS ");

let num = 123.456;

console.log("toString():", num.toString());
console.log("toFixed(2):", num.toFixed(2));
console.log("toPrecision(4):", num.toPrecision(4));
console.log("toExponential(2):", num.toExponential(2));

console.log("\n3. CONVERTING TO NUMBERS ");

console.log("Number('123'):", Number("123"));
console.log("Number('12.5'):", Number("12.5"));
console.log("Number('abc'):", Number("abc"));
console.log("parseInt('123px'):", parseInt("123px"));
console.log("parseFloat('12.34em'):", parseFloat("12.34em"));
console.log("+'42':", +"42");

console.log("\n4. SPECIAL NUMBER VALUES ");

console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN:", NaN);
console.log("1/0:", 1 / 0);
console.log("'abc' * 2:", "abc" * 2);
console.log("isNaN(NaN):", isNaN(NaN));
console.log("isNaN('123'):", isNaN("123"));
console.log("isFinite(Infinity):", isFinite(Infinity));
console.log("isFinite(100):", isFinite(100));

console.log("\n 5. NUMBER PROPERTIES ");

console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN:", Number.NaN);

console.log("\n 6. MATH OBJECT");

console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.abs(-5):", Math.abs(-5));
console.log("Math.ceil(4.2):", Math.ceil(4.2));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.max(10, 20, 5):", Math.max(10, 20, 5));
console.log("Math.min(10, 20, 5):", Math.min(10, 20, 5));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.random():", Math.random());

console.log("\n 7. RANDOM NUMBER EXAMPLES ");

// Random between 0 and 1
console.log("Random 0-1:", Math.random());

// Random between 1 and 10
let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random 1-10:", random1to10);

// Random between min and max (inclusive)
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random 5-15:", randomRange(5, 15));

console.log("\n8. PRECISION ISSUES");

console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("Fix:", (0.1 + 0.2).toFixed(1));
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);

console.log("\n9. PRACTICE TASKS ");

// Task 1: Calculate circle area
let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log("Circle area (r=5):", area.toFixed(2));

// Task 2: Random dice roll
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll:", dice);

// Task 3: Check if number is integer
let checkNum = 10.5;
console.log(checkNum, "is integer?", Number.isInteger(checkNum));

// Task 4: Format price
let price = 19.999;
console.log("Price:", price.toFixed(2));

// Task 5: Generate random hex color
let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
console.log("Random hex color:", hex);

console.log("\nDay 8 completed - JS Numbers covered.");