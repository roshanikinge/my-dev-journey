
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




////////////////////





//  EXTENSION: Advanced Variables and Data Types
// Topics: Hoisting, TDZ, Scope, Type Coercion, typeof quirks


// 1. HOISTING (var vs let/const)

console.log("1. HOISTING ");

// var is hoisted (moved to top) and initialized with undefined
console.log("Before declaration, varVariable =", varVariable);
var varVariable = "I am var";
console.log("After declaration, varVariable =", varVariable);

// let and const are hoisted but not initialized (Temporal Dead Zone)
// The following would cause ReferenceError:
// console.log(letVariable);
// let letVariable = "I am let";

console.log("let and const are hoisted but not initialized - cannot access before declaration");
console.log("\n");


// 2. TEMPORAL DEAD ZONE (TDZ)

console.log("2. TEMPORAL DEAD ZONE ");

console.log("TDZ is the period between entering scope and declaration of let/const");
console.log("Accessing a let/const variable before declaration throws ReferenceError");

try {
    console.log(tdzVariable);
} catch (error) {
    console.log("Error accessing let before declaration:", error.message);
}

let tdzVariable = "I am out of TDZ now";
console.log("After declaration:", tdzVariable);

console.log("\n");


// 3. VARIABLE SCOPE (Global, Function, Block)

console.log("3. VARIABLE SCOPE ");

// Global scope
let globalVar = "I am global";

function testScope() {
    // Function scope
    let functionVar = "I am inside function";
    console.log("Inside function - globalVar:", globalVar);
    console.log("Inside function - functionVar:", functionVar);

    if (true) {
        // Block scope
        let blockVar = "I am inside block";
        var varBlockVar = "I am var inside block";
        console.log("Inside block - blockVar:", blockVar);
        console.log("Inside block - varBlockVar:", varBlockVar);
    }

    // blockVar is NOT accessible here (block scope)
    // console.log(blockVar); // Error

    // varBlockVar IS accessible here (function scope, not block)
    console.log("Outside block but inside function - varBlockVar:", varBlockVar);
}

testScope();

// functionVar is NOT accessible here
// console.log(functionVar); // Error

console.log("\n");


// 4. UNDEFINED vs NULL

console.log(" 4. UNDEFINED vs NULL ");

let notAssigned;
let assignedNull = null;

console.log("undefined means variable declared but no value assigned");
console.log("null means intentional empty value");

console.log("notAssigned =", notAssigned, "| Type:", typeof notAssigned);
console.log("assignedNull =", assignedNull, "| Type:", typeof assignedNull);

console.log("undefined == null :", undefined == null);
console.log("undefined === null :", undefined === null);

console.log("\n");


// 5. TYPE COERCION (implicit type conversion)

console.log(" 5. TYPE COERCION ");

console.log('"5" + 3 =', "5" + 3);
console.log('"5" - 3 =', "5" - 3);
console.log('"5" * "2" =', "5" * "2");
console.log('"hello" * 3 =', "hello" * 3);

console.log('true + true =', true + true);
console.log('true + false =', true + false);
console.log('false + 5 =', false + 5);

console.log('"5" == 5 :', "5" == 5);
console.log('"5" === 5 :', "5" === 5);

console.log("\n");


// 6. TYPEOF QUIRKS

console.log("= 6. TYPEOF QUIRKS ");

console.log("typeof null:", typeof null);
console.log("typeof NaN:", typeof NaN);
console.log("typeof [] :", typeof []);
console.log("typeof {} :", typeof {});

console.log("Array.isArray([]):", Array.isArray([]));
console.log("Array.isArray({}):", Array.isArray({}));

console.log("NaN === NaN:", NaN === NaN);
console.log("isNaN(NaN):", isNaN(NaN));
console.log("isNaN('hello'):", isNaN("hello"));

console.log("\n");


// 7. PRACTICE EXERCISES


// Exercise 1: Predict the output
let ex1 = 10;
let ex2 = "10";
console.log("ex1 == ex2 :", ex1 == ex2);
console.log("ex1 === ex2 :", ex1 === ex2);

// Exercise 2: Swap two variables without a temporary variable
let a = 5;
let b = 10;
console.log("Before swap - a =", a, "b =", b);
a = a + b;
b = a - b;
a = a - b;
console.log("After swap - a =", a, "b =", b);

// Exercise 3: Check if a variable is an array
let myArray = [1, 2, 3];
let myObject = { name: "test" };
console.log("Is myArray an array?", Array.isArray(myArray));
console.log("Is myObject an array?", Array.isArray(myObject));

// Exercise 4: Convert string to number safely
let strNum = "42px";
let converted = parseInt(strNum);
console.log('parseInt("42px") =', converted);
let floatNum = parseFloat("3.14abc");
console.log('parseFloat("3.14abc") =', floatNum);

// Exercise 5: Default value using OR operator
let inputValue = "";
let defaultValue = inputValue || "default";
console.log('inputValue = "" -> defaultValue =', defaultValue);

let inputValue2 = "hello";
let defaultValue2 = inputValue2 || "default";
console.log('inputValue2 = "hello" -> defaultValue2 =', defaultValue2);

console.log("\nDay 3 Extended - Advanced variables and data types completed.");