// ==========================================
// 1. ARRAY BASICS & ACCESS
// ==========================================

// Arrays can hold multiple data types
let arr = [1, 2, 3, 4];

// Accessing elements (Index starts at 0)
// arr[0] -> 1, arr[3] -> 4


// ==========================================
// 2. BASIC ARRAY METHODS
// ==========================================

// push: Add to the end
arr.push(5); 

// pop: Remove from the end
arr.pop();

// shift: Remove from the beginning
arr.shift();

// unshift: Add to the beginning
arr.unshift(10);


// ==========================================
// 3. SPLICE VS SLICE
// ==========================================

// splice(index, count): Modifies the original array (Removes 2 items starting at index 3)
let e = [50, 60, 30, 40, 10];
e.splice(3, 2); 

// slice(start, end): Creates a copy (End index is NOT included)
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3); // Results in [50, 25]


// ==========================================
// 4. SORTING & REVERSING
// ==========================================

// reverse: Flips the array order
let g = [25, 30, 35, 40, 85];
g.reverse();

// Sorting Numbers: Requires a comparison function (a - b)
let h = [50, 20, 80, 10, 40];
h.sort((a, b) => a - b); // Ascending: [10, 20, 40, 50, 80]

// Sorting Strings: FIXED (Added quotes and removed a - b logic)
let arr2 = ["b", "f", "z", "q", "m", "k"];
arr2.sort(); // Use default sort for strings


// ==========================================
// 5. ADVANCED METHODS (MAP, FILTER, FIND)
// ==========================================

// .map(): Creates a NEW array by transforming every element
let data = [10, 20, 50, 40, 15];
let temp_data = data.map(val => {
    return val > 20 ? val : null; // Note: map keeps the same length
});

// .filter(): Returns ALL items that match a condition
let products = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];
let found_products = products.filter((item) => {
    return item === "Mobile" || item === "Tablet";
});

// .some(): Returns true if AT LEAST ONE item matches
let marks1 = [10, 20, 35, 90];
let hasHighMark = marks1.some((val) => val > 85); // true

// .every(): Returns true only if ALL items match
let def = [20, 30, 90, 45];
let allPass = def.every((val) => val > 10); // true


// ==========================================
// 6. DESTRUCTURING
// ==========================================

let arr4 = [1, 2, 3, 4, 5];
// Skipping the second element using a comma
let [j, , k] = arr4; 

let user_data = ["test", "test@gmail.com", "Male", "Surat"];
// Destructuring values into readable variables
let [userName, userEmail, userGender, userCity] = user_data;

console.log("Name:", userName);
console.log("Email:", userEmail);




// ==========================================
// 7. SPREAD & REST OPERATORS (...)
// ==========================================

// Spread Operator: Used to copy values from a main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];

// NOTE: let arr4 = arr8 would only give a reference (changing one changes both)
// Using [...] creates a brand new copy of the data
let arr9 = [...arr8];

// Use case 1: Merging multiple arrays into one
let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];

let mix_arr = [...temp_arr, ...temp_arr2]; // Result: [1, 2, 3, 4, 5, 6]

// Use case 2: Rest Operator (into functions)
// Collects multiple individual arguments into a single array
function collectData(...args) {
    return args;
}

// Summary of ... syntax:
// 1. Spread -> Expands an array into individual elements (used in Arrays/Objects)
// 2. Rest   -> Collects multiple elements into one array (used in Function parameters)
