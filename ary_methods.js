/**
 * ARRAY METHODS: .find() vs .some()
 * .find() returns the VALUE of the first element that passes the test.
 * .some() returns a BOOLEAN (true/false) if at least one element passes the test.
 */

// --- 1. .find() – First even number ---
const seats = [3, 5, 8, 10, 7];
// Looks for the first number divisible by 2
const firstEvenSeat = seats.find(seat => seat % 2 === 0); 
console.log(firstEvenSeat); // Result: 8

// --- 2. .some() – Any even number? ---
const seatsList = [3, 5, 7, 9];
// Checks if at least one number is even
const hasEvenSeat = seatsList.some(seat => seat % 2 === 0);
console.log(hasEvenSeat); // Result: false

// --- 3. .find() – First passing mark ---
const marks = [25, 35, 40, 60];
// Returns the first value that is 40 or higher
const firstPass = marks.find(mark => mark >= 40);
console.log(firstPass); // Result: 40

// --- 4. .some() – Any failed student? ---
const marksList = [60, 70, 55, 30];
// Returns true if any mark is below the passing grade of 40
const hasFail = marksList.some(mark => mark < 40);
console.log(hasFail); // Result: true

// --- 5. .find() – First affordable product ---
const prices = [1500, 1200, 800, 2000];
// Finds the first item that fits a budget of 1000 or less
const affordable = prices.find(price => price <= 1000);
console.log(affordable); // Result: 800

// --- 6. .some() – Any discount item? ---
const pricesList = [500, 800, 1200, 300];
// Checks if any item is priced under 500
const hasDiscountItem = pricesList.some(price => price < 500);
console.log(hasDiscountItem); // Result: true

// --- 7. .find() – First long word ---
const words = ['hi', 'hello', 'javascript', 'ok'];
// Returns the first string with a length greater than 5 characters
const longWord = words.find(word => word.length > 5);
console.log(longWord); // Result: 'javascript'

// --- 8. .some() – Any empty input? ---
const inputs = ['name', 'email', '', 'password'];
// Returns true if there is an empty string in the array
const hasEmpty = inputs.some(input => input === '');
console.log(hasEmpty); // Result: true

// --- 9. .find() – First high transaction ---
const transactions = [200, 500, 1200, 3000, 400];
// Identifies the first transaction amount over 1000
const highTransaction = transactions.find(amount => amount > 1000);
console.log(highTransaction); // Result: 1200

// --- 10. .some() – System alert check ---
const temperatures = [30, 32, 35, 42, 36];
// Checks if the system has hit a critical temperature over 40
const isOverheated = temperatures.some(temp => temp > 40);
console.log(isOverheated); // Result: true