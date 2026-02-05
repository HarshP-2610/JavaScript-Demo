// Array -- Hold multiple values at same time
// [20, 30, 40, 5, -8, 10]
// ["Hello", "World", "Hi", "Why"]
// [10, "Hello", -5, true, null, undefined]

// create
// define a variable = [multiple values]
let arr = [1, 2, 3, 4];

// access
// position = [0 1 2 3]
// access
// array_name[position]
// arr[3], arr[2],  arr[10]


//array methods: (variable_name.method_name)
//push, pop, shoft, unshift, splice, slice, reverse, sort
//push --> enter new value into array -- place it into last 
arr.push(5);
//variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai 
//use case -- enter new producats into exisiting producats list

//pop --> remove last value into array
arr.pop()
//use case -- remove last producat you add into your list

// shift -- remove first value into Array
arr.shift()

// use case -- remove old product automatic after sometimes

// unshift -- add value into array -- first
arr.unshift(10)

// use case -- add a value into top of that data you receive

// splice - remove value into array -- specific
// position and specific number of values

// into () - first index(position), how many value
// you want to remove

let e = [50, 60, 30, 40, 10];

e.splice(3, 2);

// use case -- select msg and remove multiple msg at on click

// slice - copy values from array -- specific position and specification number of value 
// new array = array.name.slice(Strat index , end index)

// start index -- include into copy
// end index -- not include into copy

let f = [100, 50, 25, 0];

let new_f = f.slice(1, 3);

// use case -- copy specific data and save it into
// new variable

// generate a report based on date and generate a
// file or save the file into your local machine

// splice vs slice

// splice -- remove value into main array or modify
// new array

// slice -- copy value from main array and create a
// new array that hold the value that you can into

// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];

// g.reverse();

// use case -- show latest update first into your
// frontend

// sort -- set into ascending order

let h = [50, 20, 80, 10, 40];

h.sort();

// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b) {
//     return a - b; // ascending order
// });

// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b) {
//     return b - a; // decending order
// });

// return b - a; // decending order
// }

// use case -- sort product price low to high

let arr1 = [10, 2, 5, 20, 30];
// let sr1 = arr1.sort(function(a, b) {
//     return a - b;
// });
let sort_var = arr1.sort((a, b)=> a-b) // use when array give numbers or numeric values 

let arr2 = [b, f, z, q, m, k];
let sr2 = arr2.sort(function(a, b) {
    return a - b;
});

// .map() Method:

// map tyare j use karvu ke jare ek new array create
// karvo chhe

// first map create a black array -- only for
// understanding

let data = [10, 20, 50, 40, 15];

// same like a for each loop but map return a new
// array

let temp_data = data.map(val => {
    if (val > 20) {
        return val;
    }
});







// find
// find tyare j use karvu ke jare array mathi ek
// value find karvi hoy based on condition
// find() return kare chhe array no element -->
// callback no return value nahi
// never returns what you return inside it
// returns the array element itself -- not return
// array
// .find() stops at the first match
// It does not continue looping
let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];

// Use .filter() to get ALL matches in a new array
let found_products = product.filter((item) => {
    if (item === "Mobile" || item === "Tablet") {
        return true;
    } else {
        return false;
    }
});

console.log(found_products); // Output: ["Mobile", "Tablet"]



// some
// check kare chhe ke array ma koi pan ek item condition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return true or false, find() return value of array
// give ans in true and false

let marks1 = [10, 20, 35, 90];

let any = marks1.some((val) => {
    if (val > 85) return true;
    // if (val < 85) return "need improvement";
});

console.log(any);



//every
// check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi
// true -- baddha items condition match kare
// false -- ek pan fail thay to
let def =[20, 30, 90, 45];
let num = def.every(function(val){
    return val < 40;
})
// use case --> check all student is pass or not

// some(), find(), filter(), every()

// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]

// method --> condition --> output

// .some()   --> item === "Mobile" --> true
// .find()   --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile", "Mobile"]





// Destructuring oprator -- give value to variable (ex. we don't use every time arr1[1], just save it into variable let [ ,k] = arr1)
let arr4 = [1, 2, 3, 4, 5]
// let j = arr4[0];
// let k = arr4[2];
let [ j, , k] = arr4; // --> destructuring
// let [j, , k] = arr;
console.log(k);
let user_data = ["test", "test@gmail.com", "Male", "Surat"]
// name, email, gender, city
// console.log("name", name)







// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3 ; // - just give reference not copy value(when
// you change into arr4 that will be change arr3 too)

let arr9 = [...arr8];

// ... --> rest --> into function
// ... --> spred --> into Array and Object

let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];

let mix_arr = [...temp_arr, ...temp_arr2];