// DAY 12: JS Sets

console.log("1. CREATING SETS");
let set1 = new Set();
let set2 = new Set([1, 2, 3, 4]);
console.log("Set from array:", set2);

console.log("2. ADDING AND DELETING");
let fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple");
console.log("After add:", fruits);
console.log("Size:", fruits.size);
fruits.delete("banana");
console.log("After delete:", fruits);

console.log("3. CHECKING VALUES");
fruits.add("orange");
console.log("Has apple?", fruits.has("apple"));
console.log("Has banana?", fruits.has("banana"));

console.log("4. LOOPING THROUGH SETS");
let colors = new Set(["red", "green", "blue"]);
for (let color of colors) {
    console.log("Color:", color);
}
colors.forEach(color => {
    console.log("forEach:", color);
});

console.log("5. CONVERTING SETS");
let set = new Set([1, 2, 3]);
let array = [...set];
console.log("Set to array:", array);
let strSet = new Set("hello");
console.log("String to set:", strSet);

console.log("6. SET OPERATIONS");
let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);
let union = new Set([...a, ...b]);
console.log("Union:", union);
let intersection = new Set([...a].filter(x => b.has(x)));
console.log("Intersection:", intersection);
let difference = new Set([...a].filter(x => !b.has(x)));
console.log("Difference (a - b):", difference);

console.log("7. CLEARING SETS");
let temp = new Set([1, 2, 3]);
temp.clear();
console.log("After clear, size:", temp.size);

console.log("8. PRACTICE TASKS");
let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr)];
console.log("Original:", arr);
console.log("Unique:", unique);
let arrX = [1, 2, 3];
let arrY = [3, 4, 5];
let setX = new Set(arrX);
let hasCommon = arrY.some(item => setX.has(item));
console.log("Have common elements?", hasCommon);
let word = "javascript";
let uniqueChars = new Set(word).size;
console.log("Unique chars in 'javascript':", uniqueChars);

console.log("Day 12 completed - JS Sets covered.");