
// DAY 7: JS Strings
// Topics: String creation, methods, template literals, escaping


// 1. CREATING STRINGS

console.log("1. CREATING STRINGS ");

let singleQuote = 'Hello';
let doubleQuote = "World";
let backticks = `Template literal`;

console.log("Single quote:", singleQuote);
console.log("Double quote:", doubleQuote);
console.log("Backticks:", backticks);

// String constructor (rarely used)
let strConstructor = new String("Hello");
console.log("String object:", strConstructor);
console.log("Type:", typeof strConstructor);

console.log("\n");

// 2. STRING LENGTH AND ACCESS

console.log("2. STRING LENGTH AND ACCESS ");

let text = "JavaScript";
console.log("String:", text);
console.log("Length:", text.length);
console.log("First character:", text[0]);
console.log("Last character:", text[text.length - 1]);
console.log("Character at index 4:", text.charAt(4));

// Iterate over characters
for (let i = 0; i < text.length; i++) {
    console.log("Index", i, ":", text[i]);
}

console.log("\n");

// 3. ESCAPE CHARACTERS

console.log(" 3. ESCAPE CHARACTERS ");

console.log("Single quote inside string: \'Hello\'");
console.log("Double quote inside string: \"Hello\"");
console.log("Backslash: \\");
console.log("New line:\nFirst line\nSecond line");
console.log("Tab:\tIndented text");
console.log("Carriage return:\rOverwrite");

console.log("\n");


// 4. STRING METHODS - CASE CONVERSION

console.log(" 4. CASE CONVERSION ");

let mixed = "HeLLo WoRLd";
console.log("Original:", mixed);
console.log("toUpperCase():", mixed.toUpperCase());
console.log("toLowerCase():", mixed.toLowerCase());

let userName = "  John Doe  ";
console.log("Trimmed:", userName.trim());
console.log("Trim start:", userName.trimStart());
console.log("Trim end:", userName.trimEnd());

console.log("\n");


// 5. STRING METHODS - EXTRACTING PARTS

console.log(" 5. EXTRACTING PARTS ");

let sentence = "JavaScript is awesome";
console.log("Original:", sentence);

// slice(start, end) - end not included
console.log("slice(0, 10):", sentence.slice(0, 10));
console.log("slice(11):", sentence.slice(11));
console.log("slice(-8):", sentence.slice(-8));

// substring(start, end) - similar but doesn't accept negative
console.log("substring(0, 10):", sentence.substring(0, 10));

// substr(start, length) - deprecated but still used
console.log("substr(11, 7):", sentence.substr(11, 7));

console.log("\n");


// 6. STRING METHODS - SEARCHING

console.log("6. SEARCHING ");

let quote = "The quick brown fox jumps over the lazy dog";
console.log("Quote:", quote);

console.log("indexOf('fox'):", quote.indexOf("fox"));
console.log("indexOf('cat'):", quote.indexOf("cat"));
console.log("lastIndexOf('the'):", quote.lastIndexOf("the"));
console.log("includes('quick'):", quote.includes("quick"));
console.log("startsWith('The'):", quote.startsWith("The"));
console.log("endsWith('dog'):", quote.endsWith("dog"));

let regex = /brown/;
console.log("search(/brown/):", quote.search(regex));

console.log("\n");


// 7. STRING METHODS - REPLACING AND SPLITTING

console.log("7. REPLACING AND SPLITTING ");

let greeting = "Hello Hello World";
console.log("Original:", greeting);
console.log("replace('Hello', 'Hi'):", greeting.replace("Hello", "Hi"));
console.log("replaceAll('Hello', 'Hi'):", greeting.replaceAll("Hello", "Hi"));

let csv = "apple,banana,orange";
let fruitsArray = csv.split(",");
console.log("split(','):", fruitsArray);

let words = "Hello World";
console.log("split(' '):", words.split(" "));
console.log("split(''):", words.split(""));

let joined = fruitsArray.join(" - ");
console.log("join(' - '):", joined);

console.log("\n");


// 8. STRING METHODS - PADDING AND REPEAT

console.log("8. PADDING AND REPEAT ");

let numStr = "5";
console.log("padStart(3, '0'):", numStr.padStart(3, "0"));
console.log("padEnd(5, '*'):", numStr.padEnd(5, "*"));

let repeatStr = "Ha";
console.log("repeat(3):", repeatStr.repeat(3));

console.log("\n");


// 9. TEMPLATE LITERALS (BACKTICKS)

console.log("9. TEMPLATE LITERALS ");

let firstName = "John";
let lastName = "Doe";
let ageNum = 25;

let template = `Name: ${firstName} ${lastName}, Age: ${ageNum}`;
console.log(template);

// Multi-line strings
let multiLine = `
    Line 1
    Line 2
    Line 3
`;
console.log("Multi-line string:", multiLine);

// Expressions inside template
let a = 10;
let b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}`);

// Function call inside template
function getGreeting() {
    return "Hello";
}
console.log(`${getGreeting()}, World!`);

console.log("\n");

// 10. PRACTICE TASKS

console.log(" 10. PRACTICE TASKS ");

// Task 1: Capitalize first letter of each word
let phrase = "hello world from javascript";
let capitalized = phrase.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1);
}).join(" ");
console.log("Original:", phrase);
console.log("Capitalized:", capitalized);

// Task 2: Count vowels in a string
let testString = "Hello World";
let vowelCount = 0;
let vowels = "aeiouAEIOU";
for (let char of testString) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}
console.log("String:", testString);
console.log("Number of vowels:", vowelCount);

// Task 3: Check if a string is a palindrome
let palindromeTest = "racecar";
let reversedStr = palindromeTest.split("").reverse().join("");
let isPalindrome = palindromeTest === reversedStr;
console.log("Is 'racecar' a palindrome?", isPalindrome);

// Task 4: Extract domain from email
let email = "user@example.com";
let domain = email.substring(email.indexOf("@") + 1);
console.log("Email:", email);
console.log("Domain:", domain);

// Task 5: Mask credit card number
let cardNumber = "1234567812345678";
let masked = "*".repeat(cardNumber.length - 4) + cardNumber.slice(-4);
console.log("Original:", cardNumber);
console.log("Masked:", masked);

console.log("\nDay 7 completed - JS Strings covered.");