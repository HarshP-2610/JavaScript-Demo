/**
 * JAVASCRIPT REDUCE METHOD EXAMPLES
 * .reduce() takes an array and turns it into one single value.
 */

// ### 1. Total money in wallet
// Real life: Add all cash amounts
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
console.log("Total Money:", totalMoney);



// ### 2. Total steps walked in a week
// Real life: Fitness tracker sum
const steps = [3000, 5000, 4000, 6000];
const weeklySteps = steps.reduce((total, step) => total + step, 0);
console.log("Weekly Steps:", weeklySteps);



// ### 3. Find total cart price
// Real life: Generating a shopping bill total
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
console.log("Total Cart Price:", totalPrice);



// ### 4. Find maximum score
// Real life: Identifying the highest exam mark
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);
console.log("Highest Score:", highest);



// ### 5. Count total characters
// Real life: Calculating total text length for storage
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
console.log("Total Characters:", totalChars);



// ### 6. Combine words into a sentence
// Real life: Building a message from an array of words
const wordsArr = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = wordsArr.reduce((text, word) => text + ' ' + word);
console.log("Sentence:", sentence);



// ### 7. Count passed students
// Real life: Getting a quick summary of how many students passed
const studentMarks = [35, 72, 88, 40, 25];
const passCount = studentMarks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
console.log("Pass Count:", passCount);



// ### 8. Calculate final balance
// Real life: Running bank account balance (Credits - Debits)
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
console.log("Final Balance:", finalBalance);



// ### 10. Build comma-separated string
// Real life: Formatting a list for a user interface (UI)
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
console.log("Items List:", result);