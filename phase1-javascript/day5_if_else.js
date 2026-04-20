
// DAY 5: JS If Else and Conditions
// Topics: if, else if, else, nested conditions, switch statement



// 1. SIMPLE IF STATEMENT

console.log("1. SIMPLE IF STATEMENT ");

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

let temperature = 25;

if (temperature > 30) {
    console.log("It is hot outside.");
}

console.log("Code continues...");
console.log("\n");

// 2. IF...ELSE STATEMENT

console.log("2. IF...ELSE STATEMENT ");

let score = 45;

if (score >= 40) {
    console.log("You passed the exam.");
} else {
    console.log("You failed the exam.");
}

let hour = 14;

if (hour < 12) {
    console.log("Good morning.");
} else {
    console.log("Good afternoon.");
}

console.log("\n");

// 3. IF...ELSE IF...ELSE STATEMENT

console.log(" 3. IF...ELSE IF...ELSE STATEMENT ");

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

let dayNumber = 3;
let dayName;

if (dayNumber === 1) {
    dayName = "Monday";
} else if (dayNumber === 2) {
    dayName = "Tuesday";
} else if (dayNumber === 3) {
    dayName = "Wednesday";
} else if (dayNumber === 4) {
    dayName = "Thursday";
} else if (dayNumber === 5) {
    dayName = "Friday";
} else if (dayNumber === 6) {
    dayName = "Saturday";
} else if (dayNumber === 7) {
    dayName = "Sunday";
} else {
    dayName = "Invalid day";
}

console.log("Day number", dayNumber, "is", dayName);

console.log("\n");


// 4. NESTED IF STATEMENTS

console.log("4. NESTED IF STATEMENTS ");

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Welcome Admin. You have full access.");
    } else {
        console.log("Welcome User. You have limited access.");
    }
} else {
    console.log("Please login to continue.");
}

let num1 = 10;
let num2 = 20;
let num3 = 15;
let largest;

if (num1 >= num2) {
    if (num1 >= num3) {
        largest = num1;
    } else {
        largest = num3;
    }
} else {
    if (num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
}

console.log("Largest of", num1, ",", num2, ",", num3, "is", largest);

console.log("\n");


// 5. MULTIPLE CONDITIONS USING LOGICAL OPERATORS

console.log(" 5. MULTIPLE CONDITIONS ");

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is a leap year.");
} else {
    console.log(year, "is not a leap year.");
}

let username = "john";
let password = "secret123";

if (username === "john" && password === "secret123") {
    console.log("Login successful.");
} else {
    console.log("Invalid username or password.");
}

let hasCard = true;
let hasCoupon = false;

if (hasCard || hasCoupon) {
    console.log("You are eligible for discount.");
} else {
    console.log("No discount available.");
}

console.log("\n");


// 6. SWITCH STATEMENT

console.log(" 6. SWITCH STATEMENT ");

let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple is red or green.");
        break;
    case "banana":
        console.log("Banana is yellow.");
        break;
    case "orange":
        console.log("Orange is orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

let month = 4;
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Fall";
        break;
    default:
        season = "Invalid month";
}

console.log("Month number", month, "is", season);

console.log("\n");

// 7. TERNARY OPERATOR (conditional) - Recap

console.log("= 7. TERNARY OPERATOR ");

let number = 7;
let isEven = number % 2 === 0 ? "Even" : "Odd";
console.log(number, "is", isEven);

let discount = 100 > 50 ? "Discount applied" : "No discount";
console.log(discount);

console.log("\n");


// 8. PRACTICE TASKS

console.log("8. PRACTICE TASKS ");

// Task 1: Check if a number is positive, negative, or zero
let value = -5;

if (value > 0) {
    console.log(value, "is positive.");
} else if (value < 0) {
    console.log(value, "is negative.");
} else {
    console.log(value, "is zero.");
}

// Task 2: Simple calculator using conditions
let operator = "+";
let operand1 = 10;
let operand2 = 5;
let result;

if (operator === "+") {
    result = operand1 + operand2;
} else if (operator === "-") {
    result = operand1 - operand2;
} else if (operator === "*") {
    result = operand1 * operand2;
} else if (operator === "/") {
    result = operand1 / operand2;
} else {
    result = "Invalid operator";
}

console.log(operand1, operator, operand2, "=", result);

// Task 3: Check if a character is a vowel or consonant
let character = "e";

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    console.log(character, "is a vowel.");
} else {
    console.log(character, "is a consonant.");
}

// Task 4: Traffic light system
let light = "red";

if (light === "red") {
    console.log("Stop.");
} else if (light === "yellow") {
    console.log("Get ready.");
} else if (light === "green") {
    console.log("Go.");
} else {
    console.log("Invalid light.");
}

console.log("\nDay 5 completed - JS If Else and Conditions covered.");