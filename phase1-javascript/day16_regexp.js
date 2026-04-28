// DAY 16: JS RegExp

console.log("1. CREATING REGULAR EXPRESSIONS");
let regex1 = /hello/;
let regex2 = new RegExp("hello");
console.log("Literal:", regex1);
console.log("Constructor:", regex2);

console.log("2. TEST METHOD");
let pattern = /world/;
console.log(pattern.test("hello world"));
console.log(pattern.test("hello"));

console.log("3. EXEC METHOD");
let match = /l+/.exec("hello");
console.log("Exec result:", match);

console.log("4. STRING MATCH METHOD");
let str = "The rain in Spain";
console.log(str.match(/ain/));
console.log(str.match(/ain/g));

console.log("5. STRING SEARCH METHOD");
console.log(str.search(/rain/));
console.log(str.search(/xyz/));

console.log("6. STRING REPLACE METHOD");
console.log(str.replace(/ain/, "ane"));
console.log(str.replace(/ain/g, "ane"));

console.log("7. FLAGS");
let text = "Hello hello HELLO";
console.log("i flag (case insensitive):", text.match(/hello/gi));

console.log("g flag (global):", "1 2 3".match(/\d/g));

console.log("m flag (multiline):", "^Start".match(/^Start/m));

console.log("8. CHARACTER CLASSES");
console.log("\\d (digit):", "abc123".match(/\d/g));
console.log("\\w (word):", "hello_123!".match(/\w/g));
console.log("\\s (space):", "a b c".match(/\s/g));
console.log("\\D (non-digit):", "abc123".match(/\D/g));

console.log("9. QUANTIFIERS");
console.log("{2} exactly two:", "aaa".match(/a{2}/));
console.log("{2,} at least two:", "aaaa".match(/a{2,}/));
console.log("{2,4} between:", "aaaaa".match(/a{2,4}/));
console.log("+ one or more:", "abc".match(/\w+/g));
console.log("* zero or more:", "".match(/a*/));
console.log("? zero or one:", "color".match(/colou?r/));

console.log("10. ANCHORS");
console.log("^ start:", "^Hello".match(/^Hello/));
console.log("$ end:", "Hello$".match(/Hello$/));

console.log("11. GROUPS AND RANGES");
console.log("[aeiou] vowels:", "hello".match(/[aeiou]/g));
console.log("[a-z] lowercase:", "Hello".match(/[a-z]/g));
console.log("(abc) group:", "abc123".match(/(abc)/));
console.log("| OR:", "cat".match(/cat|dog/));

console.log("12. PRACTICE TASKS");
let email = "user@example.com";
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("Email valid:", emailRegex.test(email));
let phone = "123-456-7890";
let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
console.log("Phone valid:", phoneRegex.test(phone));
let url = "https://www.example.com";
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
console.log("URL valid:", urlRegex.test(url));
let whitespace = "Hello World";
let hasSpace = /\s/.test(whitespace);
console.log("Has whitespace:", hasSpace);

console.log("Day 16 completed - JS RegExp covered.");