// Select Elements
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const addNoteBtn = document.getElementById("add-note");
const closeFormBtn = document.querySelector(".closeForm");
const stack = document.querySelector(".stack");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
const colorDots = document.querySelectorAll(".dot");

// =============================
// Open & Close Form
// =============================
addNoteBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
});

closeFormBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
});

// =============================
// Create New Card
// =============================
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input[type='text']");
  const image = inputs[0].value;
  const fullName = inputs[1].value;
  const homeTown = inputs[2].value;
  const purpose = inputs[3].value;
  const category = form.querySelector("input[name='category']:checked").value;

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-category", category);

  card.innerHTML = `
        <img class="avatar" src="${image}" alt="profile" />
        <h2>${fullName}</h2>

        <div class="info">
            <span>Home town</span>
            <span>${homeTown}</span>
        </div>

        <div class="info">
            <span>Purpose</span>
            <span>${purpose}</span>
        </div>

        <div class="buttons">
            <button class="call"><i class="ri-phone-line"></i> Call</button>
            <button class="msg">Message</button>
        </div>
    `;

  stack.prepend(card);
  updateStack();

  form.reset();
  formContainer.style.display = "none";
});

// =============================
// Stack Update Logic
// =============================
function updateStack() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index;
    card.style.transform = translateY(`${index * 10}px) scale(${1 - index * 0.02}`);
    card.style.opacity = 1 - index * 0.1;
  });
}

// =============================
// Move Stack Up
// =============================
upBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  if (cards.length > 1) {
    stack.appendChild(cards[0]);
    updateStack();
  }
});

// =============================
// Move Stack Down
// =============================
downBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  if (cards.length > 1) {
    stack.prepend(cards[cards.length - 1]);
    updateStack();
  }
});

// =============================
// Delete Card (Double Click)
// =============================
stack.addEventListener("dblclick", (e) => {
  const card = e.target.closest(".card");
  if (card) {
    card.remove();
    updateStack();
  }
});

// =============================
// Change Card Theme Color
// =============================
colorDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const activeCard = document.querySelector(".card");
    if (!activeCard) return;

    const bgColor = window.getComputedStyle(dot).backgroundColor;
    activeCard.style.background = bgColor;

    if (dot.classList.contains("black")) {
      activeCard.style.color = "white";
    } else {
      activeCard.style.color = "black";
    }
  });
});

// Initialize
updateStack();