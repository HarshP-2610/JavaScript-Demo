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
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("bg-body");
});

// ============================================================
// 2. File Upload Name on Button Logic
// ============================================================

let fileInput = document.querySelector("#file-upload");
let buttonLabel = document.querySelector("#button-text");

fileInput.addEventListener("change", function (event) {

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
colorPicker.addEventListener("input", function (event) {

    let selectedColor = event.target.value;
    console.log("Selected Color:", selectedColor);
    bigBox.style.backgroundColor = selectedColor;
});

colorPicker2.addEventListener("input", function (event) {
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



// ============================================================
// 4. Button System InnerDiv, OuterDiv
// ============================================================
// Event Object:
// sel.addEventListener("change", (dets) = {
//      console.log(dets); ==> dets //that called event object
// });
// target, type, preventDefault
// target --> that show element
// type ->show Event Type
// preventDefault --> use for html-form-- prevent form to refresh and lean details


// event delegation ==> darek child par event listener na lagavata only parent par event listner lagavvu
// Event Bubbling and Capturing
// Event Bubbling -> jena par event aave tena par listener na hoy to aapdu event tena parent par listener gotase ane aavu karta karta upar traf move karshe


let inner_div = document.querySelector(".inner_div")
let outer_div = document.querySelector(".outer_div")
let btn1 = document.querySelector(".btn")

inner_div.addEventListener("click", () => {
    console.log("inner_div clicked")
})
btn1.addEventListener("click", () => {
    console.log("btn clicked")
})
outer_div.addEventListener("click", () => {
    console.log("outer_div clicked")
})



// ============================================================
// 5. Check And OverLine On Text
// ============================================================

//use case: make it to do list thing
// when you click on text that show strike using bubbuling
// crete list that show shopping things use css (text decoration -> line-through)
// Badha checkbox select karo
// let checkboxes = document.querySelectorAll(".check");

// // Loop thi badha checkbox par event add karo
// checkboxes.forEach(function(checkbox) {
//     checkbox.addEventListener("change", function() {

//         let listItem = this.parentElement;

//         if (this.checked) {
//             listItem.style.textDecoration = "line-through";
//         } else {
//             listItem.style.textDecoration = "none";
//         }
//     });
// });

const mainList = document.querySelector("#main-list");
const cartList = document.querySelector("#cart-list");

mainList.addEventListener("change", function (e) {
    
    if (e.target.classList.contains("check")) {
        const checkbox = e.target;
        const listItem = checkbox.parentElement;
        const itemText = listItem.querySelector("span").innerText;

        if (checkbox.checked) {
            // 1. Add Strike-through
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "gray";

            // 2. Add to Cart
            // We give it a unique ID or class so we can find it later to remove it
            let cartItem = document.createElement("li");
            cartItem.innerText = itemText;
            cartItem.setAttribute("data-item", itemText); // Helper to identify the item
            cartList.appendChild(cartItem);

        } else {
            // 1. Remove Strike-through
            listItem.style.textDecoration = "none";
            listItem.style.color = "black";

            // 2. Remove from Cart
            const itemToRemove = cartList.querySelector(`[data-item="${itemText}"]`);
            if (itemToRemove) {
                itemToRemove.remove();
            }
        }
    }
});



// ============================================================
// 6. live character counter
// ============================================================

let counter = document.querySelector("#counter");
let count = document.querySelector("#count");

counter.addEventListener("input", (dets) => {
    console.log(dets.target.value.length);
    let cl = dets.target.value.length;
    let limit = count.textContent = 10 - cl;
    
    if (limit <= 0) {
        alert("Limit Reached");
        counter.disabled = true;
    }
});