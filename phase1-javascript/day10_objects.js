// DAY 10: JS Objects

console.log("1. CREATING OBJECTS ");

// Object literal
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);

// Using new Object()
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
console.log(car);

console.log("\n2. ACCESSING PROPERTIES ");

console.log("Dot notation:", person.name);
console.log("Bracket notation:", person["age"]);

let prop = "city";
console.log("Dynamic property:", person[prop]);

console.log("\n 3. ADDING AND UPDATING PROPERTIES ");

person.email = "john@example.com";
person.age = 31;
console.log("After update:", person);

console.log("\n 4. DELETING PROPERTIES");

delete person.city;
console.log("After delete:", person);

console.log("\n 5. OBJECT METHODS ");

let user = {
    firstName: "Alice",
    lastName: "Smith",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    greet() {
        return "Hello " + this.firstName;
    }
};
console.log("Full name:", user.fullName());
console.log("Greeting:", user.greet());

console.log("\n6. THIS KEYWORD ");

let obj = {
    name: "Test",
    getName: function() {
        return this.name;
    }
};
console.log("this.name:", obj.getName());

console.log("\n7. OBJECT CONSTRUCTOR");

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
}
let person1 = new Person("Bob", "Brown", 25);
let person2 = new Person("Sarah", "Jones", 28);
console.log(person1.getFullName());
console.log(person2);

console.log("\n 8. OBJECT METHODS (BUILT-IN) ");

let book = {
    title: "JS Guide",
    author: "Jane",
    year: 2022
};

console.log("Object.keys():", Object.keys(book));
console.log("Object.values():", Object.values(book));
console.log("Object.entries():", Object.entries(book));

console.log("\n 9. OBJECT DESTRUCTURING ");

let student = {
    name: "Mike",
    grade: "A",
    subject: "Math"
};
let { name, grade, subject } = student;
console.log("Destructured - name:", name);
console.log("Destructured - grade:", grade);

function printStudent({ name, grade }) {
    console.log(name + " got grade " + grade);
}
printStudent(student);

console.log("\n10. SPREAD OPERATOR WITH OBJECTS ");

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

let copy = { ...student };
console.log("Copy:", copy);

console.log("\n11. PRACTICE TASKS ");

// Task 1: Create product object
let product = {
    name: "Laptop",
    price: 999,
    discount: 10,
    finalPrice: function() {
        return this.price - (this.price * this.discount / 100);
    }
};
console.log("Product:", product.name);
console.log("Final price:", product.finalPrice());

// Task 2: Loop through object properties
for (let key in product) {
    console.log(key + ": " + product[key]);
}

// Task 3: Check if property exists
console.log("Has 'price'?", "price" in product);
console.log("Has 'color'?", "color" in product);

// Task 4: Object freeze
let frozen = { x: 10 };
Object.freeze(frozen);
frozen.x = 20;
console.log("Frozen object (cannot change):", frozen.x);

console.log("\nDay 10 completed - JS Objects covered.");