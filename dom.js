/**
 * DOM -- Document Object Model
 * All Website Code --> DOM
 * Website Output --> DOM
 * DOM -- HTML body
 * * DOM Tree Structure:
 * Node --> Element (ex. h1, p, b, i), Text (ex. lorem)
 */

// ==========================================
// 1. SELECTING ELEMENTS
// ==========================================

// Select by ID
let a = document.getElementById("abc");
console.log(a);

// Select by Class Name (Returns an HTMLCollection)
let b = document.getElementsByClassName("abc");
console.dir(b);

// Select by Tag Name (Returns an HTMLCollection)
let temp_c = document.getElementsByTagName("h1");
console.dir(temp_c);

// Query Selectors (The Modern Industry Standard)
// Selects only the FIRST matching element
let c = document.querySelector("h1"); 
console.dir(c);

// Selects ALL matching elements (Returns a NodeList)
let d = document.querySelectorAll("h1"); 
console.log(d);


// ==========================================
// 2. MODIFYING CONTENT
// ==========================================

let e = document.querySelector("h1");

// .innerText -> Shows only visible text (respects CSS)
e.innerText = "first h1 tag";

// .textContent -> Shows all text, including hidden content
e.textContent = "h1 tag updated";

// .innerHTML -> Renders HTML tags inside the string
e.innerHTML = "<i>first h1 tag with italics</i>";


// ==========================================
// 3. CREATING & INSERTING ELEMENTS
// ==========================================

// Step 1: Create the element
let pre_tag = document.createElement("pre");
console.log(pre_tag)

// Step 2: Add content
pre_tag.textContent = "Hello Pre tag";

// Step 3: Add to the DOM
// .prepend() adds the element as the first child of the body
document.body.prepend(pre_tag);

// Note: You could also use .append() to add it to the end.