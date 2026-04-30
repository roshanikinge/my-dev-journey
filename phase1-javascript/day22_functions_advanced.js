// Day 22: JS Functions Advanced - Closures, Recursion, Higher-Order Functions

console.log("1. CLOSURES - function remembers outer variables");
function outer(outerVar) {
    return function inner(innerVar) {
        return outerVar + innerVar;
    };
}
let addTen = outer(10);
console.log("Closure result (10 + 5):", addTen(5));

function counter() {
    let count = 0;
    return {
        increment: function() { count++; return count; },
        decrement: function() { count--; return count; },
        getCount: function() { return count; }
    };
}
let myCounter = counter();
console.log("Counter increment:", myCounter.increment());
console.log("Counter increment:", myCounter.increment());
console.log("Counter decrement:", myCounter.decrement());
console.log("Counter getCount:", myCounter.getCount());

console.log("2. RECURSION - function calling itself");
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(7):", fibonacci(7));

console.log("3. HIGHER-ORDER FUNCTIONS");
function applyOperation(a, b, operation) {
    return operation(a, b);
}
let sumResult = applyOperation(5, 3, function(x, y) { return x + y; });
let multiplyResult = applyOperation(5, 3, function(x, y) { return x * y; });
console.log("Higher-order sum:", sumResult);
console.log("Higher-order multiply:", multiplyResult);

console.log("4. FUNCTION COMPOSITION");
function addTwo(x) { return x + 2; }
function multiplyByThree(x) { return x * 3; }
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
let composed = compose(multiplyByThree, addTwo);
console.log("Compose (addTwo then multiplyByThree) of 5:", composed(5));

console.log("5. MEMOIZATION (caching)");
function memoizedFactorial() {
    let cache = {};
    return function fact(n) {
        if (n in cache) return cache[n];
        if (n === 0 || n === 1) return 1;
        cache[n] = n * fact(n - 1);
        return cache[n];
    };
}
let factMemo = memoizedFactorial();
console.log("Memoized factorial 6:", factMemo(6));
console.log("Memoized factorial 6 (cached):", factMemo(6));

console.log("6. PRACTICE TASKS");
function once(fn) {
    let called = false;
    let result;
    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
            return result;
        }
        return "Function already called";
    };
}
let init = once(() => console.log("Initialized"));
init();
init();

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log("Map double:", doubled);
let evens = numbers.filter(n => n % 2 === 0);
console.log("Filter evens:", evens);
let sumAll = numbers.reduce((acc, n) => acc + n, 0);
console.log("Reduce sum:", sumAll);

console.log("Day 22 completed - JS Functions Advanced covered.");