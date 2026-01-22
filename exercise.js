console.log("-------------Example 1-------------");
// Logical AND (&&): Both conditions must be true
let x = 10;
let y = 20;

if (x > 5 && y > 5) {
    console.log("Both are greater than 5");
} else {
    console.log("One or both are not greater than 5");
}

console.log("-------------Example 2------------");
// Logical OR (||): At least one condition must be true
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
    console.log("Access granted");
} else {
    console.log("Access Denied");
}

console.log("-------------Example 3------------");
// Logical NOT (!): Fixed logic
let temp = 35;

// If temp is NOT greater than 30 (False), it prints "Pleasant"
// To fix: removed the '!' so that 35 correctly prints "Hot day"
if (temp > 30) { 
    console.log("Hot day");
} else {
    console.log("Pleasant day");
}

console.log("-------------Example 4------------");
// Truthy vs Falsy: 0 is always Falsy
let a = 0;

if (a) {
    console.log("Truthy value");
} else {
    console.log("Falsy value");
}

console.log("-------------Example 5------------");
// Chained Ternary for Grades
let score = 78;

let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "D";

console.log("Grade:", grade);

console.log("-------------Example 6------------");
// Chained Ternary for Status
let points = 120;

let status = points >= 100 ? "Gold" :
             points >= 50 ? "Silver" : "Bronze";

console.log("Status:", status);

console.log("-------------Example 7------------");
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);

console.log("-------------Example 8------------");
// Post-increment: adds 1 to b
let b = 5;
b++; 
console.log(b); // 6

console.log("-------------Example 9------------");
// Pre-increment: adds 1 to c
let c = 8;
++c;
console.log(c); // 9

console.log("-----------Example 10-----------");
/**
 * Post-increment Explanation:
 * 'e' gets the value of 'd' FIRST (4), THEN 'd' increments to 5.
 */
let d = 4;
let e = d++; 
console.log("d:", d, "e:", e); // d: 5, e: 4

console.log("-----------Example 11-----------");
// Pre-increment comparison
let f = 4;
let g = ++f; 
console.log("f:", f, "g:", g); // f: 5, g: 5

console.log("-----------Example 12-----------");
// Nullish Coalescing (??): Returns right side only if left is null/undefined
let userSetting = null;
let defaultSetting = "Dark Mode";
let currentTheme = userSetting ?? defaultSetting;
console.log("Theme:", currentTheme); // "Dark Mode"