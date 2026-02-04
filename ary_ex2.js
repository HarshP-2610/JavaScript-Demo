// 1. Double daily steps count
// Context: Fitness app doubling a step goal for a challenge
console.log("")
console.log("-------- Example : 1 -----------")
const steps = [1000, 2000, 3000];
function doubleSteps(step) {
    return step * 2;
}
const newSteps = steps.map(doubleSteps);
console.log(newSteps); // [2000, 4000, 6000]


// 2. Convert minutes to seconds
// Context: Video platform calculating total duration in seconds
console.log("")
console.log("-------- Example : 2 -----------")
const minutes = [1, 5, 10];
const seconds = minutes.map(function(min) {
    return min * 60;
});
console.log(seconds); // [60, 300, 600]


// 3. Add ₹50 delivery charge to prices
// Context: Food delivery app adding a flat fee at checkout
console.log("")
console.log("-------- Example : 3 -----------")
const foodPrices = [200, 350, 500];
const finalPrices = foodPrices.map(price => price + 50);
console.log(finalPrices); // [250, 400, 550]


// 4. Convert exam marks to grades
// Context: School result system automating Pass/Fail status
console.log("")
console.log("-------- Example : 4 -----------")
const marks = [35, 72, 88, 40];
function getGrade(mark) {
    return mark >= 40 ? 'Pass' : 'Fail';
}
const grades = marks.map(getGrade);
console.log(grades); // ['Fail', 'Pass', 'Pass', 'Pass']


// 5. Capitalize names
// Context: Sanitizing user input for a clean UI profile page
console.log("")
console.log("-------- Example : 5 -----------")
const names = ['rahul', 'neha', 'amit'];
const formattedNames = names.map(name =>
    name[0].toUpperCase() + name.slice(1)
);
console.log(formattedNames); // ['Rahul', 'Neha', 'Amit']


// 6. Apply 10% discount
// Context: E-commerce "Seasonal Sale" logic
console.log("")
console.log("-------- Example : 6 -----------")
const itemPrices = [500, 1000, 1500];
function applyDiscount(price) {
    return price - (price * 0.10);
}
const discounted = itemPrices.map(applyDiscount);
console.log(discounted); // [450, 900, 1350]


// 7. Add bonus points based on conditions
// Context: RPG Game rewarding high-performing players
console.log("")
console.log("-------- Example : 7 -----------")
const scores = [45, 60, 85];
const finalScores = scores.map(score => {
    if (score >= 80) return score + 20;
    if (score >= 50) return score + 10;
    return score;
});
console.log(finalScores); // [45, 70, 105]


// 8. Convert temperatures with formula
// Context: Weather app switching from Metric to Imperial units
console.log("")
console.log("-------- Example : 8 -----------")
const celsius = [0, 20, 30];
function toFahrenheit(temp) {
    return (temp * 9/5) + 32;
}
const fahrenheit = celsius.map(toFahrenheit);
console.log(fahrenheit); // [32, 68, 86]


// 9. Generate table of numbers
// Context: Educational app generating math multiplication tables
console.log("")
console.log("-------- Example : 9 -----------")
const numbers = [1, 2, 3, 4, 5];
const tableOfTwo = numbers.map(num => num * 2);
console.log(tableOfTwo); // [2, 4, 6, 8, 10]


// 10. Combine map with string formatting
// Context: Banking app sending automated SMS alerts
console.log("")
console.log("-------- Example : 10 -----------")
const balances = [500, 1200, 300];
const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);
console.log(messages); 
// ["Your balance is ₹500", "Your balance is ₹1200", "Your balance is ₹300"]