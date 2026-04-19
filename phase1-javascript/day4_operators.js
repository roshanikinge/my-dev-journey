
// DAY 4: JS Operators
// Topics: Arithmetic, Assignment, Comparison, Logical, Ternary, Precedence


// 1. ARITHMETIC OPERATORS

console.log("1. ARITHMETIC OPERATORS ");

let a = 10;
let b = 3;

console.log("a =", a, "b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

let x = 5;
console.log("x =", x);
console.log("++x =", ++x);
console.log("x++ =", x++);
console.log("x =", x);
console.log("--x =", --x);
console.log("x-- =", x--);
console.log("x =", x);

console.log("\n");


// 2. ASSIGNMENT OPERATORS

console.log(" 2. ASSIGNMENT OPERATORS ");

let num = 10;
console.log("num =", num);

num += 5;
console.log("num += 5 ->", num);

num -= 3;
console.log("num -= 3 ->", num);

num *= 2;
console.log("num *= 2 ->", num);

num /= 4;
console.log("num /= 4 ->", num);

num %= 3;
console.log("num %= 3 ->", num);

num **= 2;
console.log("num **= 2 ->", num);

console.log("\n");


// 3. COMPARISON OPERATORS

console.log("3. COMPARISON OPERATORS ");

let p = 10;
let q = "10";

console.log("p =", p, "q =", q);
console.log("p == q  (equal value):", p == q);
console.log("p === q (equal value and type):", p === q);
console.log("p != q  (not equal value):", p != q);
console.log("p !== q (not equal value or type):", p !== q);
console.log("p > 5 :", p > 5);
console.log("p < 5 :", p < 5);
console.log("p >= 10 :", p >= 10);
console.log("p <= 10 :", p <= 10);

console.log("\n");


// 4. LOGICAL OPERATORS

console.log(" 4. LOGICAL OPERATORS ");

let isRaining = true;
let hasUmbrella = false;
let isWeekend = true;

console.log("isRaining =", isRaining);
console.log("hasUmbrella =", hasUmbrella);
console.log("isWeekend =", isWeekend);

console.log("isRaining && hasUmbrella (AND):", isRaining && hasUmbrella);
console.log("isRaining || hasUmbrella (OR):", isRaining || hasUmbrella);
console.log("!isRaining (NOT):", !isRaining);

let canGoOut = !isRaining || hasUmbrella;
console.log("Can go out (not raining OR has umbrella):", canGoOut);

let canSleepLate = isWeekend && !isRaining;
console.log("Can sleep late (weekend AND not raining):", canSleepLate);

console.log("\n");


// 5. TERNARY OPERATOR (conditional)

console.log("5. TERNARY OPERATOR ");

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Age:", age);
console.log("Can vote:", canVote);

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Score:", score);
console.log("Grade:", grade);

let isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back" : "Please login";
console.log(welcomeMessage);

console.log("\n");


// 6. OPERATOR PRECEDENCE

console.log("6. OPERATOR PRECEDENCE ");

let result1 = 2 + 3 * 4;
console.log("2 + 3 * 4 =", result1);

let result2 = (2 + 3) * 4;
console.log("(2 + 3) * 4 =", result2);

let result3 = 10 - 2 + 3;
console.log("10 - 2 + 3 =", result3);

let result4 = 10 - (2 + 3);
console.log("10 - (2 + 3) =", result4);

console.log("\n");


// 7. PRACTICE TASK

console.log("7. PRACTICE TASK ");

let temperature = 30;
let isSummer = true;

let heatIndex = temperature + (isSummer ? 5 : 0);
let weatherStatus = heatIndex > 35 ? "Too hot" : heatIndex > 25 ? "Warm" : "Cool";

console.log("Temperature:", temperature);
console.log("Is summer:", isSummer);
console.log("Heat index:", heatIndex);
console.log("Weather status:", weatherStatus);

let isValidUser = true;
let hasPermission = false;
let canAccess = isValidUser && hasPermission;
console.log("Can access system:", canAccess);

let defaultName = "Guest";
let userName = "";
let displayName = userName || defaultName;
console.log("Display name:", displayName);

console.log("\nDay 4 completed - JS Operators covered.");