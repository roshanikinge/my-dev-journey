// DAY 18: JS Errors

console.log("1. TRY...CATCH");
try {
    let result = 10 / 0;
    console.log("No error:", result);
} catch (error) {
    console.log("Caught error:", error.message);
}

console.log("2. CATCHING REFERENCE ERROR");
try {
    console.log(undefinedVariable);
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
}

console.log("3. CATCHING TYPE ERROR");
try {
    let num = 5;
    num.toUpperCase();
} catch (error) {
    console.log("TypeError caught:", error.message);
}

console.log("4. THROWING CUSTOM ERRORS");
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log("Custom error:", error.message);
}

console.log("5. THROW WITH DIFFERENT ERROR TYPES");
function checkAge(age) {
    if (age < 0) {
        throw new RangeError("Age cannot be negative");
    }
    if (typeof age !== "number") {
        throw new TypeError("Age must be a number");
    }
    return "Valid age";
}
try {
    console.log(checkAge(25));
    console.log(checkAge(-5));
} catch (error) {
    console.log(error.name + ":", error.message);
}

console.log("6. FINALLY BLOCK");
function testFinally(value) {
    try {
        if (value < 0) {
            throw new Error("Negative value");
        }
        return "Success";
    } catch (error) {
        return "Error: " + error.message;
    } finally {
        console.log("Finally always runs");
    }
}
console.log(testFinally(10));
console.log(testFinally(-1));

console.log("7. NESTED TRY...CATCH");
try {
    try {
        throw new Error("Inner error");
    } catch (innerError) {
        console.log("Inner catch:", innerError.message);
        throw new Error("Rethrown");
    }
} catch (outerError) {
    console.log("Outer catch:", outerError.message);
}

console.log("8. PRACTICE TASKS");
function parseJSON(jsonString) {
    try {
        let obj = JSON.parse(jsonString);
        console.log("Parsed:", obj);
    } catch (error) {
        console.log("Invalid JSON:", error.message);
    }
}
parseJSON('{"name": "John"}');
parseJSON('invalid json');

function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    } catch (error) {
        return "Error: " + error.message;
    }
}
console.log("safeDivide(10, 0):", safeDivide(10, 0));
console.log("safeDivide(10, 2):", safeDivide(10, 2));

let userInput = "abc";
try {
    let number = Number(userInput);
    if (isNaN(number)) {
        throw new Error("Not a number");
    }
    console.log("Valid number:", number);
} catch (error) {
    console.log("Input error:", error.message);
}

console.log("Day 18 completed - JS Errors covered.");