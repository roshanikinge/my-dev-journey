// Day 28: JS JSON - parse, stringify, and working with JSON data

console.log("1. JSON STRINGIFY (object to JSON)");
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    isStudent: false,
    courses: ["JS", "Python"]
};
let jsonString = JSON.stringify(person);
console.log("Original object:", person);
console.log("JSON string:", jsonString);

console.log("2. JSON PARSE (JSON to object)");
let parsedPerson = JSON.parse(jsonString);
console.log("Parsed object:", parsedPerson);
console.log("Name from parsed:", parsedPerson.name);

console.log("3. STRINGIFY WITH PRETTY PRINT");
let prettyString = JSON.stringify(person, null, 2);
console.log("Pretty JSON:\n", prettyString);

console.log("4. REVIVER FUNCTION IN PARSE");
let jsonData = '{"name":"Bob","birth":"1990-01-01"}';
let withDate = JSON.parse(jsonData, (key, value) => {
    if (key === "birth") return new Date(value);
    return value;
});
console.log("With date object:", withDate.birth instanceof Date);

console.log("5. REPLACER FUNCTION IN STRINGIFY");
let user = {
    name: "John",
    password: "secret",
    email: "john@example.com"
};
let filtered = JSON.stringify(user, ["name", "email"]);
console.log("Only name and email:", filtered);

let withReplacer = JSON.stringify(user, (key, value) => {
    if (key === "password") return undefined;
    return value;
});
console.log("Password removed:", withReplacer);

console.log("6. COMMON JSON ERRORS");
let circular = { a: 1 };
// circular.b = circular; // would cause error
// try {
//     JSON.stringify(circular);
// } catch (e) {
//     console.log("Circular reference error:", e.message);
// }

let badJSON = '{"name":"John",}';
try {
    JSON.parse(badJSON);
} catch (e) {
    console.log("Invalid JSON error:", e.message);
}

console.log("7. PRACTICE TASKS");
let library = [
    { title: "Book1", author: "Author A", year: 2000 },
    { title: "Book2", author: "Author B", year: 2005 }
];
let libraryJSON = JSON.stringify(library);
console.log("Library JSON:", libraryJSON);
let restored = JSON.parse(libraryJSON);
console.log("Restored array length:", restored.length);

let settings = { theme: "dark", fontSize: 14 };
localStorage.setItem("settings", JSON.stringify(settings));
let retrieved = JSON.parse(localStorage.getItem("settings"));
console.log("From localStorage simulation:", retrieved);

console.log("Day 28 completed - JSON covered.");