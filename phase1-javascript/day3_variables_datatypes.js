
// DAY 3: Variables and Data Types
// Topics: let, const, var, Data Types



// 1. VARIABLE DECLARATION (let, const, var)

console.log(" 1. VARIABLE DECLARATION ");

// let - can be reassigned
let age = 25;
console.log("let age =", age);
age = 26;
console.log("After reassignment, age =", age);

// const - cannot be reassigned (constant)
const birthYear = 1995;
console.log("const birthYear =", birthYear);
// birthYear = 1996; // This would cause an error

// var - old way (avoid in modern code)
var oldStyle = "I am var";
console.log("var oldStyle =", oldStyle);

console.log("\n");


// 2. RULES FOR VARIABLE NAMES

console.log(" 2. NAMING RULES ");

// Valid names
let userName = "John";
let user_name = "John";
let user123 = "John";
let _private = "John";
let $dollar = "John";

console.log("Valid examples: userName, user_name, user123, _private, $dollar");

// Invalid names (commented out - would cause errors)
// let 123user = "John";     // Cannot start with number
// let my-name = "John";     // Hyphens not allowed
// let class = "John";       // Reserved keyword

console.log("\n");


// 3. DATA TYPES IN JAVASCRIPT

console.log(" 3. DATA TYPES ");

// 3.1 String - text
let stringExample = "Hello World";
console.log("String:", stringExample, "-> Type:", typeof stringExample);

// 3.2 Number - integers and decimals
let integerNumber = 42;
let decimalNumber = 3.14;
console.log("Number (integer):", integerNumber, "-> Type:", typeof integerNumber);
console.log("Number (decimal):", decimalNumber, "-> Type:", typeof decimalNumber);

// 3.3 Boolean - true or false
let isLoggedIn = true;
let isGreater = 10 > 5;
console.log("Boolean true:", isLoggedIn, "-> Type:", typeof isLoggedIn);
console.log("Boolean false (10 > 5):", isGreater, "-> Type:", typeof isGreater);

// 3.4 Undefined - variable declared but not assigned
let undefinedVariable;
console.log("Undefined:", undefinedVariable, "-> Type:", typeof undefinedVariable);

// 3.5 Null - intentional empty value
let nullVariable = null;
console.log("Null:", nullVariable, "-> Type:", typeof nullVariable);

// 3.6 Symbol (ES6) - unique identifier
let symbolExample = Symbol("id");
console.log("Symbol:", symbolExample.toString(), "-> Type:", typeof symbolExample);

// 3.7 BigInt - very large integers
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber, "-> Type:", typeof bigNumber);

console.log("\n");


// 4. DYNAMIC TYPING

console.log("4. DYNAMIC TYPING ");
console.log("JavaScript is dynamically typed - a variable can hold any type.");

let dynamicVar = "I am a string";
console.log("Value:", dynamicVar, "| Type:", typeof dynamicVar);

dynamicVar = 42;
console.log("Value:", dynamicVar, "| Type:", typeof dynamicVar);

dynamicVar = true;
console.log("Value:", dynamicVar, "| Type:", typeof dynamicVar);

dynamicVar = { name: "Object" };
console.log("Value:", dynamicVar, "| Type:", typeof dynamicVar);

console.log("\n");

// 5. TYPE CONVERSION

console.log("5. TYPE CONVERSION ");

// String to Number
let strNumber = "123";
let convertedNumber = Number(strNumber);
console.log('Number("123") =', convertedNumber, "| Type:", typeof convertedNumber);

// Number to String
let num = 456;
let convertedString = String(num);
console.log('String(456) =', convertedString, "| Type:", typeof convertedString);

// Boolean conversion
console.log('Boolean(1) =', Boolean(1));
console.log('Boolean(0) =', Boolean(0));
console.log('Boolean("hello") =', Boolean("hello"));
console.log('Boolean("") =', Boolean(""));

console.log("\n");


// 6. PRACTICE TASK

console.log("6. PRACTICE TASK ");

// Create a user profile using different data types
const userNameProfile = "Alice";
let userAgeProfile = 30;
let isActive = true;
let userEmail = "alice@example.com";
let lastLogin = null;
let accountBalance = 1234.56;

console.log("User Profile:");
console.log("Name:", userNameProfile, "- Type:", typeof userNameProfile);
console.log("Age:", userAgeProfile, "- Type:", typeof userAgeProfile);
console.log("Active:", isActive, "- Type:", typeof isActive);
console.log("Email:", userEmail, "- Type:", typeof userEmail);
console.log("Last Login:", lastLogin, "- Type:", typeof lastLogin);
console.log("Balance:", accountBalance, "- Type:", typeof accountBalance);

console.log("\nDay 3 completed - Variables and Data Types covered.");