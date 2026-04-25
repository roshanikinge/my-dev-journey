// DAY 11: JS Arrays

console.log(" 1. CREATING ARRAYS ");

let arr1 = [1, 2, 3, 4];
let arr2 = new Array(5);
let arr3 = Array.of(1, 2, 3);
console.log("Array literal:", arr1);
console.log("Array of size 5:", arr2.length);
console.log("Array.of:", arr3);

console.log("\n 2. ACCESSING ARRAY ELEMENTS ");

let fruits = ["apple", "banana", "orange"];
console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);
console.log("Length:", fruits.length);

console.log("\n 3. ADDING AND REMOVING ELEMENTS");

// Push (end)
fruits.push("grape");
console.log("After push:", fruits);

// Pop (end)
let removed = fruits.pop();
console.log("After pop, removed:", removed);
console.log("Array:", fruits);

// Unshift (beginning)
fruits.unshift("mango");
console.log("After unshift:", fruits);

// Shift (beginning)
let first = fruits.shift();
console.log("After shift, removed:", first);
console.log("Array:", fruits);

console.log("\n4. LOOPING THROUGH ARRAYS ");

let numbers = [10, 20, 30, 40];

// for loop
for (let i = 0; i < numbers.length; i++) {
    console.log("for loop index", i + ":", numbers[i]);
}

// for...of
for (let num of numbers) {
    console.log("for...of:", num);
}

// forEach
numbers.forEach(function(num, index) {
    console.log("forEach index", index + ":", num);
});

console.log("\n5. ARRAY METHODS - MAP ");

let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log("Original:", nums);
console.log("Map (double):", doubled);

let names = ["alice", "bob", "charlie"];
let capitalized = names.map(n => n[0].toUpperCase() + n.slice(1));
console.log("Capitalized:", capitalized);

console.log("\n 6. ARRAY METHODS - FILTER ");

let ages = [12, 18, 20, 15, 25, 30];
let adults = ages.filter(age => age >= 18);
console.log("Ages:", ages);
console.log("Adults:", adults);

let words = ["cat", "elephant", "dog", "hippopotamus"];
let longWords = words.filter(w => w.length > 3);
console.log("Words longer than 3 letters:", longWords);

console.log("\n7. ARRAY METHODS - REDUCE ");

let values = [5, 10, 15, 20];
let sum = values.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

let max = values.reduce((maxNum, num) => num > maxNum ? num : maxNum);
console.log("Max:", max);

console.log("\n 8. ARRAY METHODS - FIND AND FINDINDEX ");

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];
let userFound = users.find(u => u.id === 2);
console.log("Find user id 2:", userFound);

let index = users.findIndex(u => u.name === "Bob");
console.log("Index of Bob:", index);

console.log("\n9. ARRAY METHODS - SLICE AND SPLICE ");

let letters = ["a", "b", "c", "d", "e"];
let sliced = letters.slice(1, 4);
console.log("Slice (1-4):", sliced);
console.log("Original unchanged:", letters);

let removedSplice = letters.splice(2, 2, "x", "y");
console.log("Removed by splice:", removedSplice);
console.log("After splice:", letters);

console.log("\n10. ARRAY METHODS - SORT AND REVERSE ");

let unsorted = [5, 2, 8, 1, 9];
unsorted.sort();
console.log("Default sort:", unsorted);

let numbersSort = [10, 2, 30, 5];
numbersSort.sort((a, b) => a - b);
console.log("Ascending sort:", numbersSort);

numbersSort.sort((a, b) => b - a);
console.log("Descending sort:", numbersSort);

let rev = [1, 2, 3];
rev.reverse();
console.log("Reversed:", rev);

console.log("\n11. ARRAY METHODS - JOIN AND CONCAT ");

let parts = ["Hello", "World"];
let joined = parts.join(" ");
console.log("Join with space:", joined);

let arrA = [1, 2];
let arrB = [3, 4];
let combined = arrA.concat(arrB);
console.log("Concat:", combined);

console.log("\n12. SPREAD OPERATOR WITH ARRAYS ");

let oldArray = [1, 2, 3];
let newArray = [...oldArray, 4, 5];
console.log("Spread copy:", newArray);

let merge = [...arrA, ...arrB];
console.log("Spread merge:", merge);

console.log("\n 13. CHECKING ARRAY METHODS ");

let test = [1, 2, 3];
console.log("Array.isArray(test):", Array.isArray(test));
console.log("Array.isArray('hello'):", Array.isArray("hello"));
console.log("includes 2:", test.includes(2));
console.log("indexOf 3:", test.indexOf(3));

console.log("\n14. PRACTICE TASKS ");

// Task 1: Remove duplicates
let duplicates = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(duplicates)];
console.log("Remove duplicates:", unique);

// Task 2: Sum of all numbers
let sumAll = [10, 20, 30];
let total = sumAll.reduce((acc, curr) => acc + curr, 0);
console.log("Total sum:", total);

// Task 3: Filter even numbers
let mix = [1, 2, 3, 4, 5, 6];
let evens = mix.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// Task 4: Double and filter
let doubleFilter = [1, 2, 3, 4, 5];
let result = doubleFilter.map(n => n * 2).filter(n => n > 5);
console.log("Double then >5:", result);

console.log("\nDay 11 completed - JS Arrays covered.");