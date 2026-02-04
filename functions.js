// function
// what --> function is a block of code that performs a  specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return statement
// type of functions:
// function name(params) {} --> function declaration
function abc(){}
// let fnc = function (){} --> function expression
let fnc = function() {}
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {}




// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni andar lakheli(pass) kareli values)
console.log(" ");
console.log("-------- Example : 1 --------");
function cart(producat){ // product -- params
  console.log(`Adding ${producat}`)
}
cart("Laptop"); // laptop -- args
cart("Mac Book");
cart("S25 ultra");


console.log(" ");
console.log("-------- Example : 2 --------");
//Example : 2 for parms and agrs
function cart2(producat, price){ // product -- params
    console.log(`Adding ${producat} at ${price}`)
}
cart2("Laptop", 50000); // laptop -- args
cart2("Mac Book", 250000);
cart2("S25 ultra", 69000);



console.log(" ");
console.log("-------- Example : 3 --------");
//Example : 3 for parms and agrs
function sendNotification(userName, action) { // userName, action -- params
    console.log(`${userName} just ${action} your post!`);
}
sendNotification("Rahul", "liked");      // "Rahul", "liked" -- args
sendNotification("Sneha", "shared");     // "Sneha", "shared" -- args
sendNotification("Priya", "commented on"); // "Priya", "commented on" -- args




console.log(" ");
console.log("-------- Example : 4 --------");
// convert into arrow function
// let fnc = () => {}
let checkGradeArrow = (studentName, score) => {
    console.log(` Arrow Functions --> ${studentName} scored ${score}`);
};  
checkGradeArrow("Sanya", 95);




console.log(" ");
console.log("-------- Example : 5 --------");
// convert into function expression
// let fnc = function(){}
const checkGradeExpression = function(studentName, score) {
    console.log(`Function Expression --> ${studentName} scored ${score}`);
};
checkGradeExpression("Dev", 88);




console.log(" ");
// console.log(" ");
console.log("-------- Default, rest parameters in function --------");
console.log("----> Default ");
// Default, rest parameters in function

// Default
function abcd(b = 10, price = 0){
    console.log(price, b)
}
abcd(15); 
// result will be: 0 15 (since 15 is assigned to 'b' and 'price' uses its default 0)
// use case -- fees / flipkart -- platform fee

//Rest
console.log("----> Rest ");
console.log("Simple Function : ");
function def(a, b, c, d, e){
    console.log(a, b, c, d, e)
}
def(1, 2, 3, 4, 5); 

console.log("Rest Function : ");
function def1(...number){
    console.log(number)
}
def1(1, 2, 3, 4, 5); 




console.log(" ");
console.log("----> first Class Function and their types:");
// function can be treated as variables
console.log("1.");
// let temp_a = function(){} - first class function
const cart5 = function (producat, price) {
    console.log(`Adding ${producat} at ${price}`);
};
cart5("function expression - S25 ultra", 69000);

console.log("2.");
// function can be passed as arguments to other functions
function temp_b(fnc) {
    fnc();
}
temp_b(function fnc2() {
    console.log("First Class Function");
});




// higher order function (HOF)

// function that takes another function as an argument
// or returns a function as a result
// (eva function je return kare ek function
// athava accept kare ek function params ma)


// function abcd(val) { val(); }
// --> abcd(function () { console.log("hello"); })

// function abcd(val) {} --> higher order function

console.log(" ");
console.log("----> higher order function (HOF)");

// function abcd() { return function() {} }
// abcd()() --> higher order

// Higher Order Function
function greet(callback) {
  console.log("Hello User");
  callback(); // calling passed function
}

// Normal function
function sayBye() {
  console.log("Good Bye!");
}

// Passing function as argument
greet(sayBye);


// pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare )
let a = 10;
function abcd_pure() {
  console.log("Hello");
}

// impure function --> function je same input par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare )
function abcd_impure() {
  a++;
  console.log(a);
}




// closure function
// function je potana parent function na variables ne access kari shake(return thava valo function use karshe parent function na koi variable) (function within function)
function outer() {
  let count = 0;
  function inner() {
    count++; // accessing outer(parent) function variable
    console.log(count);
  }
  return inner;
}

let fnc = outer();
fnc();