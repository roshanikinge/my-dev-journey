// DAY 15: JS Math

console.log("1. MATH CONSTANTS");
console.log("PI:", Math.PI);
console.log("E:", Math.E);
console.log("SQRT2:", Math.SQRT2);

console.log("2. ROUNDING METHODS");
console.log("Math.round(4.6):", Math.round(4.6));
console.log("Math.ceil(4.2):", Math.ceil(4.2));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.trunc(4.9):", Math.trunc(4.9));

console.log("3. ABSOLUTE AND SIGN");
console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.sign(-5):", Math.sign(-5));
console.log("Math.sign(0):", Math.sign(0));
console.log("Math.sign(8):", Math.sign(8));

console.log("4. POWER AND ROOT");
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("2 ** 3:", 2 ** 3);
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.cbrt(27):", Math.cbrt(27));

console.log("5. MIN AND MAX");
console.log("Math.min(10, 5, 20):", Math.min(10, 5, 20));
console.log("Math.max(10, 5, 20):", Math.max(10, 5, 20));
let arr = [4, 7, 2, 9];
console.log("Min in array:", Math.min(...arr));
console.log("Max in array:", Math.max(...arr));

console.log("6. RANDOM NUMBERS");
console.log("Math.random():", Math.random());
let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random 1-10:", random1to10);
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random 5-15:", randomRange(5, 15));

console.log("7. TRIGONOMETRY");
console.log("Math.sin(PI/2):", Math.sin(Math.PI / 2));
console.log("Math.cos(0):", Math.cos(0));
console.log("Math.tan(PI/4):", Math.tan(Math.PI / 4));

console.log("8. LOGARITHMS");
console.log("Math.log(10):", Math.log(10));
console.log("Math.log10(100):", Math.log10(100));
console.log("Math.log2(8):", Math.log2(8));

console.log("9. PRACTICE TASKS");
let radius = 5;
let area = Math.PI * radius ** 2;
console.log("Circle area (r=5):", area.toFixed(2));
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll:", dice);
let numbers = [12, 45, 7, 89, 23];
let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);
console.log("Max:", maxNum, "Min:", minNum);
let angle = 45;
let radians = angle * (Math.PI / 180);
console.log("Sin of 45 degrees:", Math.sin(radians).toFixed(4));

console.log("Day 15 completed - JS Math covered.");