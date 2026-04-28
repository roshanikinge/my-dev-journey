// DAY 21: JS DataTypes Deep Dive

console.log("1. PRIMITIVE VS REFERENCE TYPES");
let primitive1 = "hello";
let primitive2 = primitive1;
primitive2 = "world";
console.log("Primitive - original:", primitive1);
console.log("Primitive - copied changed:", primitive2);

let ref1 = { name: "Alice" };
let ref2 = ref1;
ref2.name = "Bob";
console.log("Reference - original:", ref1.name);
console.log("Reference - copied changed:", ref2.name);

console.log("2. TYPEOF OPERATOR");
console.log('typeof "hello":', typeof "hello");
console.log("typeof 42:", typeof 42);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof {  }:", typeof {});
console.log("typeof [ ]:", typeof []);
console.log("typeof function(){}:", typeof function(){});

console.log("3. INSTANCEOF OPERATOR");
console.log("[] instanceof Array:", [] instanceof Array);
console.log("{} instanceof Object:", {} instanceof Object);
console.log("new Date() instanceof Date:", new Date() instanceof Date);
console.log("'hello' instanceof String:", "hello" instanceof String);

console.log("4. TYPE CONVERSION RULES");
console.log('String(123):', String(123));
console.log('Number("456"):', Number("456"));
console.log('Boolean(0):', Boolean(0));
console.log('Boolean("hello"):', Boolean("hello"));

console.log("5. TRUTHY AND FALSY VALUES");
console.log("Falsy values:");
console.log("Boolean(false):", Boolean(false));
console.log("Boolean(0):", Boolean(0));
console.log('Boolean(""):', Boolean(""));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(NaN):", Boolean(NaN));
console.log("Truthy values (examples):");
console.log('Boolean("abc"):', Boolean("abc"));
console.log("Boolean(1):", Boolean(1));
console.log("Boolean({}):", Boolean({}));
console.log("Boolean([]):", Boolean([]));

console.log("6. NAN PROPERTIES");
console.log("NaN === NaN:", NaN === NaN);
console.log("isNaN(NaN):", isNaN(NaN));
console.log("isNaN('hello'):", isNaN("hello"));
console.log("Number.isNaN('hello'):", Number.isNaN("hello"));

console.log("7. UNDEFINED VS NULL");
let undef;
let nul = null;
console.log("typeof undefined:", typeof undef);
console.log("typeof null:", typeof nul);
console.log("undefined == null:", undefined == null);
console.log("undefined === null:", undefined === null);

console.log("8. SYMBOL TYPE");
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol('id') === Symbol('id'):", sym1 === sym2);
let obj = {};
obj[sym1] = "secret";
console.log("Symbol as key:", obj[sym1]);

console.log("9. BIGINT TYPE");
let big1 = 9007199254740991n;
let big2 = BigInt("12345678901234567890");
console.log("BigInt:", big1);
console.log("typeof big1:", typeof big1);
console.log("BigInt addition:", big1 + 1n);

console.log("10. TYPE COERCION EXAMPLES");
console.log('"5" + 3 =', "5" + 3);
console.log('"5" - 3 =', "5" - 3);
console.log('"5" * "2" =', "5" * "2");
console.log('"hello" * 3 =', "hello" * 3);
console.log('true + true =', true + true);
console.log('true + false =', true + false);
console.log('false + 5 =', false + 5);

console.log("11. PRACTICE TASKS");
function checkType(value) {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (Array.isArray(value)) return "array";
    return typeof value;
}
console.log("checkType(null):", checkType(null));
console.log("checkType([]):", checkType([]));
console.log("checkType({}):", checkType({}));

let userInput = "  123  ";
let numValue = Number(userInput.trim());
let isValid = !isNaN(numValue) && numValue !== 0;
console.log("Converted value:", numValue, "Valid:", isValid);

let arrCheck = [1, 2, 3];
console.log("Is array?", Array.isArray(arrCheck));

console.log("Day 21 completed - JS DataTypes deep dive covered.");
