// [MODULE] Day 25: JS Modules - export/import

console.log("1. NAMED EXPORTS (simulated)");
// In real modules, you'd export:
// export const name = "John";
// export function greet() {...}

// For demonstration, we simulate module behavior:
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Error"
};

console.log("Add 5+3:", calculator.add(5, 3));
console.log("Multiply 4*7:", calculator.multiply(4, 7));

console.log("2. DEFAULT EXPORT (simulated)");
const mainFunction = () => console.log("Default export function");
mainFunction();

console.log("3. IMPORTING NAMED EXPORTS");
// import { add, multiply } from './calculator.js';
console.log("Example: import { add, multiply } from './calculator.js';");

console.log("4. IMPORTING DEFAULT");
// import calculator from './calculator.js';

console.log("5. RENAMING IMPORTS");
// import { add as sum } from './calculator.js';

console.log("6. IMPORT ALL");
// import * as calc from './calculator.js';

console.log("7. DYNAMIC IMPORTS");
async function loadModule() {
    // const module = await import('./someModule.js');
    console.log("Dynamic import example: await import('./module.js')");
}
loadModule();

console.log("8. PRACTICE TASK - Module Pattern");
const myModule = (function() {
    let privateVar = "I am private";
    function privateMethod() {
        return "Private method";
    }
    return {
        publicMethod: function() {
            return privateMethod() + " called publicly";
        },
        getPrivateVar: function() {
            return privateVar;
        }
    };
})();
console.log(myModule.publicMethod());
console.log(myModule.getPrivateVar());

console.log("Day 25 completed - JS Modules covered.");