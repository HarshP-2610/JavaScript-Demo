/**
 * JAVASCRIPT DATA TYPES
 * 1. Primitive: Stored by value (String, Number, Boolean, Null, Undefined, Symbol, BigInt)
 * 2. Non-Primitive: Stored by reference (Arrays, Objects, Functions)
 */

// --- Primitive Examples ---
let a = 25;
let b = a;

let str = "username";       // String
let num = 12.25;            // Number
let isTrue = true;          // Boolean
let empty = null;           // Null (Intentional absence)
let notDefined;             // Undefined (Uninitialized)

// Symbol: Generates unique, immutable identifiers
let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 === s2);

// BigInt: For numbers larger than 2^53 - 1
let bigNum = 9007199254740991n;

// --- Non-Primitive Examples ---
let arr = [1, 2, 3];        // Array
let obj = { name: "test" }; // Object
let temp_e = arr;           // Copying the reference (pointing to same memory)

// --- Type Quirks ---
console.log(typeof null);       // "object" (Known JS bug)
console.log(typeof NaN);        // "number" (NaN = Not a Number)
console.log("5" + 1);           // "51" (String concatenation)
console.log("5" - 1);           // 4 (Numeric coercion)

// Use 'instanceof' for reference types
console.log(arr instanceof Array); // true