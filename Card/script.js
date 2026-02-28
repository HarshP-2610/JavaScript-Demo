const stack = document.querySelector(".stack");
const formContainer = document.querySelector(".form-container");
const addBtn = document.querySelector("#add-note");
const closeBtn = document.querySelector(".closeForm");
const form = document.querySelector("form");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const colorDots = document.querySelectorAll(".dot");

// Initial Data
let cardsData = [
  {
    name: "Meet Patel",
    img: "https://i.pinimg.com/736x/3b/31/e0/3b31e09ffd5768aa41edfea3a42ee02d.jpg",
    town: "Surat",
    purpose: "Quick appointment note",
    bgColor: "#ffffff"
  },
  {
    name: "Jane Doe",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    town: "Mumbai",
    purpose: "Project Review",
    bgColor: "#a855f7"
  }
];

// --- 1. RENDER WITH ANIMATION ---
function renderCards() {
  stack.innerHTML = "";

  cardsData.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    // Dynamic Stacking Physics
    const yOffset = index * 12;
    const scale = 1 - index * 0.05;
    const opacity = 1 - index * 0.2;

    cardElement.style.zIndex = cardsData.length - index;
    cardElement.style.transform = `translateY(${yOffset}px) scale(${scale})`;
    cardElement.style.opacity = opacity;
    cardElement.style.backgroundColor = card.bgColor || "white";

    cardElement.innerHTML = `
        <img class="avatar" src="${card.img}" alt="profile" />
        <h2>${card.name}</h2>
        <div class="info"><span>Town</span><span>${card.town}</span></div>
        <div class="info"><span>Note</span><span>${card.purpose}</span></div>
        <div class="buttons">
          <button class="call"><i class="ri-phone-line"></i></button>
          <button class="msg">Message</button>
        </div>
    `;
    stack.appendChild(cardElement);
  });
}

// --- 2. THE ANIMATED SHUFFLE ---
function animateShuffle(direction) {
  const cards = document.querySelectorAll(".card");
  if (cards.length < 2) return;

  const topCard = cards[0];

  // 1. Slide the top card out
  if (direction === "down") {
    topCard.style.transform = "translateX(120%) rotate(10deg)";
  } else {
    topCard.style.transform = "translateY(-120%)";
  }
  topCard.style.opacity = "0";

  // 2. Wait for animation, then re-order data and re-render
  setTimeout(() => {
    if (direction === "down") {
      const first = cardsData.shift();
      cardsData.push(first);
    } else {
      const last = cardsData.pop();
      cardsData.unshift(last);
    }
    renderCards();
  }, 400); // Matches the 0.5s CSS transition
}

// --- 3. COLOR CHANGE LOGIC ---
// This changes the color of the TOP card in the stack
colorDots.forEach(dot => {
  dot.addEventListener("click", () => {
    const newColor = window.getComputedStyle(dot).backgroundColor;
    if (cardsData.length > 0) {
      cardsData[0].bgColor = newColor; // Update data
      renderCards(); // Refresh UI
    }
  });
});

// --- 4. FORM & BUTTONS ---
addBtn.addEventListener("click", () => (formContainer.style.display = "block"));
closeBtn.addEventListener("click", () => (formContainer.style.display = "none"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll("input[type='text']");
  
  const newCard = {
    img: inputs[0].value,
    name: inputs[1].value,
    town: inputs[2].value,
    purpose: inputs[3].value,
    bgColor: "#ffffff"
  };

  cardsData.unshift(newCard);
  renderCards();
  form.reset();
  formContainer.style.display = "none";
});

downBtn.addEventListener("click", () => animateShuffle("down"));
upBtn.addEventListener("click", () => animateShuffle("up"));

// Initial Run
renderCards();