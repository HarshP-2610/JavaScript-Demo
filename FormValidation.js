// Reading Values From input, textarea, select
const form = document.querySelector("form");
const username = document.querySelector("#username");
const textarea = document.querySelector("#textarea");
const select = document.querySelector("#select");

form.addEventListener("submit", (dets) => {
    
    dets.preventDefault();

    console.log("Username:", username.value);
    console.log("Message:", textarea.value);
    console.log("Gender:", select.value);
});