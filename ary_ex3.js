/**
 * JAVASCRIPT FILTER METHOD EXAMPLES
 * The .filter() method creates a new array with all elements 
 * that pass the test implemented by the provided function.
 */

// ### 1. Get even numbers
// Real life: Find even roll numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);



// ### 2. Filter adults
// Real life: Allow only 18+ users (Note: updated logic to match 'Adult' definition)
const ages = [2, 21, 10, 18, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
console.log("Adults:", adults);



// ### 3. Remove empty items
// Real life: Clean user input by removing blank strings
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
console.log("Valid Inputs:", validInputs);



// ### 4. Filter passing marks
// Real life: Exam result system
const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
console.log("Passed Students:", passedStudents);



// ### 5. Get affordable prices
// Real life: Shopping app price filter for budget items
const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
console.log("Affordable Prices:", affordable);



// ### 6. Filter long words
// Real life: Search keyword validation (ignoring short words like 'hi' or 'ok')
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
console.log("Long Words:", longWords);


// ### 7. Filter positive numbers
// Real life: Bank transaction validation to find only credits
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
console.log("Credits:", credits);



// ### 8. Filter numbers within a range
// Real life: Score selection for specific grading tiers
const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
console.log("Selected Range Scores:", selectedScores);