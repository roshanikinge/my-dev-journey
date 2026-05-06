// Day 32: JS Generators and Iterators

console.log("1. BASIC GENERATOR FUNCTION");
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = simpleGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);

console.log("2. GENERATOR WITH LOOP");
function* countUpTo(max) {
    for (let i = 1; i <= max; i++) {
        yield i;
    }
}
let counter = countUpTo(3);
for (let val of counter) {
    console.log("Loop yield:", val);
}

console.log("3. GENERATOR WITH INFINITE SEQUENCE");
function* infiniteEvens() {
    let num = 0;
    while (true) {
        yield num;
        num += 2;
    }
}
let evens = infiniteEvens();
console.log(evens.next().value);
console.log(evens.next().value);
console.log(evens.next().value);

console.log("4. GENERATOR WITH INPUT (next with argument)");
function* interactive() {
    let x = yield "Enter first number";
    let y = yield "Enter second number";
    yield x + y;
}
let interact = interactive();
console.log(interact.next().value);
console.log(interact.next(5).value);
console.log(interact.next(3).value);

console.log("5. YIELD* (delegation)");
function* a() {
    yield 1;
    yield 2;
}
function* b() {
    yield* a();
    yield 3;
    yield 4;
}
for (let val of b()) console.log("yield*:", val);

console.log("6. MAKING OBJECT ITERABLE");
let range = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    }
};
for (let num of range) console.log("Iterable object:", num);

console.log("7. GENERATOR RETURN AND THROW");
function* withControl() {
    try {
        yield 1;
        yield 2;
    } catch (e) {
        console.log("Caught:", e);
    }
}
let g = withControl();
console.log(g.next().value);
console.log(g.throw("error inside"));

console.log("8. PRACTICE TASKS");
function* fibonacciGenerator(limit) {
    let a = 0, b = 1;
    for (let i = 0; i < limit; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fib = fibonacciGenerator(7);
console.log("Fibonacci sequence:");
for (let num of fib) console.log(num);

function* take(iterator, count) {
    for (let i = 0; i < count; i++) {
        yield iterator.next().value;
    }
}
let natural = function*() { let n = 1; while(true) yield n++; }();
let firstFive = take(natural, 5);
console.log("First 5 naturals:", [...firstFive]);

console.log("Day 32 completed - Generators and Iterators covered.");