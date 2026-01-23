console.log("-------- Example : 1 --------");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Result: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// Why: The loop starts at 1 and increments by 1 until it reaches 10.

console.log("-------- Example : 2 --------");

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
// Result: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// Why: The while loop starts at 10 and decreases the value until it hits 1.

console.log("-------- Example : 3 --------");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// Result: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// Why: The modulo operator (%) checks if the remainder is 0 when divided by 2.

console.log("-------- Example : 4 --------");

let j = 1;
while (j <= 15) {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}
// Result: 1, 3, 5, 7, 9, 11, 13, 15
// Why: Checks if the number has a remainder when divided by 2 to identify it as odd.

console.log("-------- Example : 5 --------");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
// Result: 5 x 1 = 5 ... 5 x 10 = 50
// Why: Multiplies the static number 5 by the loop counter 'i' in each iteration.

console.log("-------- Example : 6 --------");

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);
// Result: 5050
// Why: The variable 'sum' accumulates the value of 'i' during every loop cycle.

console.log("-------- Example : 7 --------");

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
// Result: 3, 6, 9 ... 48
// Why: Filters numbers where the remainder is 0 when divided by 3.

console.log("-------- Example : 8 --------");

let num = prompt("give a number");
for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i, " is even");
    } else {
        console.log(i, " is odd");
    }
}
// Result: 1 is odd, 2 is even... up to user number
// Why: Uses an if-else block to categorize every number from 1 to the input.

console.log("-------- Example : 9 --------");

// Example : 9 
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
// Result: 3, 5, 6, 9, 10, 12, 15... 100
// Why: Uses the OR (||) operator to find numbers that match either condition.

console.log("-------- Example : 10 --------");

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        break;
    }
}
// Result: 1, 2, 3, 4, 5, 6, 7
// Why: The 'break' keyword immediately terminates the loop when the condition is met.

console.log("-------- Example : 11 --------");

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
// Result: 1, 2, 4, 5, 7, 8, 10... 20
// Why: 'continue' skips the current iteration's console.log and jumps to the next number.

console.log("-------- Example : 12 --------");

let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        count++;
        console.log(i);
    }
    if (count === 5) {
        break;
    }
}
// Result: 1, 3, 5, 7, 9
// Why: Uses a counter to track findings and 'break' to stop once the limit is reached.