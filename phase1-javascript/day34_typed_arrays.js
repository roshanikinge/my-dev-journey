                 // Day 34: JS Typed Arrays

console.log("1. CREATING TYPED ARRAYS");
let buffer = new ArrayBuffer(16);
console.log("ArrayBuffer byteLength:", buffer.byteLength);

let int8 = new Int8Array(buffer);
int8[0] = 10;
int8[1] = 20;
console.log("Int8Array:", int8);

let int16 = new Int16Array(buffer);
console.log("Int16Array view:", int16);

let uint8 = new Uint8Array(4);
uint8[0] = 255;
uint8[1] = 0;
console.log("Uint8Array:", uint8);

console.log("2. TYPED ARRAY TYPES");
let int16arr = new Int16Array([1000, -2000, 3000]);
console.log("Int16Array:", int16arr);
let uint16arr = new Uint16Array([1000, 2000, 3000]);
console.log("Uint16Array:", uint16arr);
let float32arr = new Float32Array([1.5, 2.75, 3.2]);
console.log("Float32Array:", float32arr);
let float64arr = new Float64Array([1.5, 2.75, 3.2]);
console.log("Float64Array:", float64arr);

console.log("3. ARRAYBUFFER AND VIEWS");
let buf = new ArrayBuffer(8);
let view1 = new Int8Array(buf);
let view2 = new Int16Array(buf);
view1[0] = 1;
view1[1] = 2;
console.log("Int8 view:", view1[0], view1[1]);
console.log("Int16 view (same buffer):", view2[0]);

console.log("4. TYPED ARRAY METHODS");
let arrTyped = new Uint8Array([5, 2, 8, 1]);
console.log("Original:", arrTyped);
let sorted = arrTyped.sort();
console.log("Sorted:", sorted);
let sliced = arrTyped.slice(1, 3);
console.log("Sliced (1,3):", sliced);
let mapped = arrTyped.map(x => x * 2);
console.log("Mapped:", mapped);
let filtered = arrTyped.filter(x => x > 3);
console.log("Filtered (>3):", filtered);
let reduced = arrTyped.reduce((sum, x) => sum + x, 0);
console.log("Sum:", reduced);

console.log("5. CONVERTING BETWEEN TYPED ARRAYS AND REGULAR ARRAYS");
let regular = [10, 20, 30];
let typed = new Int32Array(regular);
console.log("Regular to typed:", typed);
let back = Array.from(typed);
console.log("Typed to regular:", back);

console.log("6. DATAVIEW (reading/writing at byte offset)");
let dvBuffer = new ArrayBuffer(4);
let dv = new DataView(dvBuffer);
dv.setInt8(0, 127);
dv.setInt16(1, 1000);
console.log("DataView getInt8(0):", dv.getInt8(0));
console.log("DataView getInt16(1):", dv.getInt16(1));

console.log("7. PRACTICE TASKS");
let pixels = new Uint8ClampedArray(4);
pixels[0] = 300;
pixels[1] = -5;
pixels[2] = 128;
console.log("Uint8ClampedArray (clamps values):", pixels);

let rgb = new Uint8Array([100, 150, 200]);
let brightness = rgb.map(x => Math.min(255, x + 50));
console.log("Brightened RGB:", brightness);

let ints = new Int32Array([1, 2, 3, 4]);
let sumAll = 0;
for (let i = 0; i < ints.length; i++) sumAll += ints[i];
console.log("Sum using loop:", sumAll);

console.log("Day 34 completed - Typed Arrays covered.");