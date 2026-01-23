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
function cart(producat){ // product -- params
  console.log(`Adding ${producat}`)
}
cart("Laptop"); // laptop -- args
cart("Mac Book");
cart("S25 ultra");