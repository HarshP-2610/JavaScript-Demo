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