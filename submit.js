// const form = document.querySelector('form');
// const displayImg = document.querySelector('.dp-img img');
// const displayName = document.getElementById('displayName');
// const displayBio = document.getElementById('displayBio');
// const displayEmail = document.getElementById('displayEmail');
// const displayPhone = document.getElementById('displayPhone');

// form.addEventListener('submit', function(e) {

//     e.preventDefault(); 

//     const inputs = form.querySelectorAll('input');

//     const imgUrl = inputs[0].value;
//     const name = inputs[1].value;
//     const bio = inputs[2].value;
//     const email = inputs[3].value;
//     const phone = inputs[4].value;


//     if (imgUrl.trim() !== "") {
//         displayImg.src = imgUrl;
//     }

//     displayName.textContent = name || "Username";
//     displayBio.textContent = bio || "bio";
//     displayEmail.textContent = email || "email";
//     displayPhone.textContent = phone || "phone Number";

//     console.log("Card updated!");
// });


let inp = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();

    // Create elements
    let card = document.createElement("div");
    let dp_img = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let h6 = document.createElement("h6");

    // Fix 1: Use classList.add
    card.classList.add("card");
    dp_img.classList.add("dp_img");


    document.body.append(card);

    // Append everything
    card.appendChild(dp_img);
    dp_img.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);
    console.log(card);

    img.src = inp[0].value;
    h3.textContent = inp[1].value; // Name
    h4.textContent = inp[2].value; // Bio
    h5.textContent = inp[3].value; // Email
    h6.textContent = inp[4].value; // Phone

    form.reset();

});