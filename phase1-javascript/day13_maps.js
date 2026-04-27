// DAY 13: JS Maps

console.log("1. CREATING MAPS");
let map1 = new Map();
let map2 = new Map([["name", "John"], ["age", 30]]);
console.log("Map from array:", map2);

console.log("2. SETTING AND GETTING VALUES");
let user = new Map();
user.set("name", "Alice");
user.set("age", 25);
user.set("city", "Paris");
console.log("Get name:", user.get("name"));
console.log("Get age:", user.get("age"));

console.log("3. CHECKING AND DELETING");
console.log("Has 'name'?", user.has("name"));
console.log("Has 'email'?", user.has("email"));
user.delete("city");
console.log("After delete:", user);

console.log("4. MAP SIZE AND CLEAR");
console.log("Size:", user.size);
user.set("country", "France");
console.log("New size:", user.size);

console.log("5. LOOPING THROUGH MAPS");
let scores = new Map([
    ["Alice", 95],
    ["Bob", 87],
    ["Charlie", 92]
]);
for (let [key, value] of scores) {
    console.log(key + ":", value);
}
scores.forEach((value, key) => {
    console.log("forEach -", key + ":", value);
});

console.log("6. MAP KEYS, VALUES, ENTRIES");
console.log("Keys:", [...scores.keys()]);
console.log("Values:", [...scores.values()]);
console.log("Entries:", [...scores.entries()]);

console.log("7. OBJECT VS MAP");
let objKey = { id: 1 };
let map = new Map();
map.set(objKey, "Value for object");
console.log("Object as key:", map.get(objKey));
let ordered = new Map();
ordered.set(3, "three");
ordered.set(1, "one");
ordered.set(2, "two");
console.log("Insertion order:", [...ordered.keys()]);

console.log("8. CONVERTING MAPS TO OBJECTS");
let mapData = new Map([["a", 1], ["b", 2]]);
let obj = Object.fromEntries(mapData);
console.log("Map to object:", obj);
let backToMap = new Map(Object.entries(obj));
console.log("Object back to map:", backToMap);

console.log("9. PRACTICE TASKS");
let text = "hello";
let freq = new Map();
for (let char of text) {
    freq.set(char, (freq.get(char) || 0) + 1);
}
console.log("Character frequency in 'hello':", [...freq.entries()]);
let users = new Map();
users.set(1, { name: "John", age: 25 });
users.set(2, { name: "Jane", age: 30 });
console.log("User 1:", users.get(1));
console.log("User 2:", users.get(2));
let prices = new Map([["apple", 100], ["banana", 50], ["orange", 80]]);
let total = 0;
for (let price of prices.values()) {
    total += price;
}
console.log("Total price:", total);

console.log("Day 13 completed - JS Maps covered.");