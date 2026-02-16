// Event – page par koi pan action karo tene ek event rise karshe,
// page par click, hover, typing all are events
// Event Listener – event nu reaction -- give reaction when click,
// dblclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})

// ===============================================
// Common Events : click, input, change, submit, mouseover, keyup
// Click
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.addEventListener("click", function(){
//     document.body.classList.toggle("bg-body")
// });

// ============================================================
// 1. Theme Toggle Logic
// ============================================================

let themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("bg-body");
});

// ============================================================
// 2. File Upload Name on Button Logic
// ============================================================

let fileInput = document.querySelector("#file-upload");
let buttonLabel = document.querySelector("#button-text");

fileInput.addEventListener("change", function(event) {
    
    if (event.target.files.length > 0) {
       
        let fileName = event.target.files[0].name;
        buttonLabel.innerText = fileName;
        console.log("File uploaded:", fileName);
    } else {
        buttonLabel.innerText = "Upload File";
    }
});

// ============================================================
// 3. Select Color Change into box
// ============================================================

// 1. Select the elements
let colorPicker = document.querySelector("#color-picker");
let colorPicker2 = document.querySelector("#color-picker2");
let bigBox = document.querySelector("#big-box");

// 2. Add the Event Listener
colorPicker.addEventListener("input", function(event) {
    
    let selectedColor = event.target.value;
    console.log("Selected Color:", selectedColor);
    bigBox.style.backgroundColor = selectedColor;
});

colorPicker2.addEventListener("input", function(event) {
    let selectedColor = event.target.value;
    console.log("Border Color:", selectedColor);
    bigBox.style.borderColor = selectedColor; 
});



// ============================================================
// 3. Submit and change background color
// ============================================================
let form = document.querySelector("form");

form.addEventListener("submit", () => {
    document.body.style.backgroundColor = "black";
});