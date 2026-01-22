// operators
// Arithmetic, comparison, logical, assignment, unary, ternary

// Arithmetic:
// +, -, /, *, **, %

console.log(1 + 2);
console.log("user" + " " + "name");

console.log(2 - 1);

console.log(240 / 2);
console.log(25 * 2);

console.log(12 % 4);
console.log(9 % 2);

console.log(2 ** 3);

// Comparison (ans: true, false)

let a = 10;
let b = 5;
let c = "10";

console.log("a == c:", a == c);      // true

console.log("a === c:", a === c);    // false

console.log("a != b:", a != b);      // true

console.log("a !== c:", a !== c);    // true

console.log("a > b:", a > b);        // true

console.log("a < b:", a < b);        // false

console.log("a >= 10:", a >= 10);    // true

console.log("b <= 5:", b <= 5);      // true


// Assignment Operators:

let x = 12;
console.log(x); // give a value, value assignment operator

x += 3;
console.log(x); // (add value into old value and save it into x)

x -= 4;
console.log(x); //(subtract value into old value and save it into x)

x *= 2;
console.log(x);

x /= 2;
console.log(x);

x %= 2;
console.log(x); // (give remainder)

// Unary operators
// ++, --, +, -, !

let y = 5;

console.log("y:", y);      // 5
console.log("y++:", y++);  // 5 (post-increment)
console.log("y:", y);      // 6

console.log("++y:", ++y);  // 7 (pre-increment)

console.log("y--:", y--);  // 7 (post-decrement)
console.log("y:", y);      // 6

console.log("--y:", --y);  // 5 (pre-decrement)

console.log(+"10");        // 10 (string to number)

console.log(-y);           // -5

console.log(!true);        // false
console.log(!0);           // true

// Ternary
// ? :
// condition ? true thase to print thase : false thase to print thase
// let a = 12 > 13 ? console.log("true") : console.log("false");

console.log(12 > 13 ? "true" : "false");

// typeof null --> object
console.log(typeof null);

// typeof [] --> object
let z = [];
console.log(typeof z);
console.log(z instanceof Array);

// typeof NaN --> number
console.log(typeof NaN);

// typeof --> primitive data type mate use karvo
console.log(typeof 10);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);

// instanceof --> reference data type mate use karvo
let obj = {};
console.log(obj instanceof Object);

let arr = [];
console.log(arr instanceof Array);  