// // Reading Values From input, textarea, select
// const form = document.querySelector("form");
// const username = document.querySelector("#username");
// const textarea = document.querySelector("#textarea");
// const select = document.querySelector("#select");

// form.addEventListener("submit", (dets) => {
    
//     dets.preventDefault();

//     console.log("Username:", username.value);
//     console.log("Message:", textarea.value);
//     console.log("Gender:", select.value);
// });

// FormValidation.js

// 1. Select the elements
const form = document.querySelector("#registrationForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email"); // Added email to logic
const textarea = document.querySelector("#textarea");
const genderSelect = document.querySelector("#gender");

// 2. Add the Event Listener
form.addEventListener("submit", (event) => {
    // Prevent the page from refreshing
    event.preventDefault();

    // 3. Simple Validation Check
    if (genderSelect.value === "") {
        alert("Please select a gender!");
        return;
    }

    // 4. Reading Values
    const formData = {
        user: username.value,
        email: email.value,
        message: textarea.value,
        gender: genderSelect.value
    };

    // 5. Output
    console.log("Form Submitted Successfully:", formData);
    
    // Optional: Reset form after submission
    // form.reset();
});