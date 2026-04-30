/*
 * Day 23: JS Classes
 * Topics: class declaration, constructor, methods, inheritance, static, getters/setters
 */

console.log("1. CLASS DECLARATION");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
    haveBirthday() {
        this.age++;
        return `Now I am ${this.age}`;
    }
}
let alice = new Person("Alice", 25);
console.log(alice.greet());
console.log(alice.haveBirthday());

console.log("2. CLASS EXPRESSION");
let Animal = class {
    constructor(species) {
        this.species = species;
    }
    speak() {
        return `${this.species} makes sound`;
    }
};
let dog = new Animal("Dog");
console.log(dog.speak());

console.log("3. INHERITANCE (extends)");
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying for grade ${this.grade}`;
    }
    greet() {
        return `Hi, I'm student ${this.name}`;
    }
}
let bob = new Student("Bob", 20, "A");
console.log(bob.greet());
console.log(bob.study());
console.log(bob.haveBirthday());

console.log("4. STATIC METHODS AND PROPERTIES");
class MathUtils {
    static PI = 3.14159;
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
console.log("Static PI:", MathUtils.PI);
console.log("Static add 5+3:", MathUtils.add(5, 3));
console.log("Static multiply 4*6:", MathUtils.multiply(4, 6));

console.log("5. GETTERS AND SETTERS");
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value < 0) throw new Error("Radius cannot be negative");
        this._radius = value;
    }
    get area() {
        return Math.PI * this._radius ** 2;
    }
}
let circle = new Circle(5);
console.log("Radius:", circle.radius);
console.log("Area:", circle.area.toFixed(2));
circle.radius = 7;
console.log("New area:", circle.area.toFixed(2));

console.log("6. PRIVATE FIELDS (using #)");
class BankAccount {
    #balance = 0;
    deposit(amount) {
        if (amount > 0) this.#balance += amount;
        return this.#balance;
    }
    withdraw(amount) {
        if (amount <= this.#balance) this.#balance -= amount;
        return this.#balance;
    }
    getBalance() {
        return this.#balance;
    }
}
let account = new BankAccount();
account.deposit(100);
account.withdraw(30);
console.log("Private balance via getter:", account.getBalance());
// console.log(account.#balance); // SyntaxError - private

console.log("7. PRACTICE TASKS");
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    get perimeter() {
        return 2 * (this.width + this.height);
    }
}
let rect = new Rectangle(10, 5);
console.log("Rectangle area:", rect.area);
console.log("Rectangle perimeter:", rect.perimeter);

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    info() {
        return `${this.make} ${this.model}`;
    }
}
class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }
    info() {
        return `${super.info()} with ${this.doors} doors`;
    }
}
let myCar = new Car("Toyota", "Camry", 4);
console.log(myCar.info());

console.log("Day 23 completed - JS Classes covered.");