// ==========================================
// 1. FOR LOOP 
// Best used when you know the exact number of iterations.
// ==========================================
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log("Count is:", i);
}

// ==========================================
// 2. WHILE LOOP
// Runs as long as the condition is true. Check condition BEFORE executing.
// ==========================================
console.log("\n--- While Loop ---");
let j = 1;
while (j <= 5) {
    console.log("While count:", j);
    j++; 
}

// ==========================================
// 3. DO...WHILE LOOP
// Runs at least once, even if the condition is false.
// ==========================================
console.log("\n--- Do...While Loop ---");
let k = 1;
do {
    console.log("Do...While count:", k);
    k++;
} while (k <= 5);

// ==========================================
// 4. FOR...OF LOOP
// The modern way to iterate over Array values.
// ==========================================
console.log("\n--- For...Of Loop (Arrays) ---");
const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
    console.log("Color:", color);
}

// ==========================================
// 5. FOR...IN LOOP
// Used to iterate over the properties (keys) of an Object.
// ==========================================
console.log("\n--- For...In Loop (Objects) ---");
const student = { name: "Mahek", age: 25, course: "JavaScript" };
for (const key in student) {
    console.log(key + ": " + student[key]);
}

// ==========================================
// 6. BREAK AND CONTINUE
// Control the flow inside loops.
// ==========================================
console.log("\n--- Break & Continue ---");
for (let i = 1; i <= 5; i++) {
    if (i === 2) continue; // Skip the rest of this iteration
    if (i === 4) break;    // Stop the loop entirely
    console.log("Current Value:", i);
}

//Second example for break
for (let k = 1; k <= 20; k++) {
  console.log(k);
  if (k === 6) {
    break;
  }
}
//Second example for continue
for (let k = 1; k <= 20; k++) {
  console.log(k);
  if (k === 6) {
    break;
  }
}