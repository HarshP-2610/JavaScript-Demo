// Sample Data
const users = [
  {
    username: "Jetha Lal",
    description:
      "Frontend Developer who loves React and modern UI design.",
    image:
      "https://i.pinimg.com/736x/70/53/e6/7053e6f9a2b64a8c302ef27918e2d39a.jpg",
  },
  {
    username: "Chacha Jii",
    description:
      "Cybersecurity enthusiast and ethical hacking learner.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_0xzhHjwXsXTYWPR0YeN55eZFeD08qGToQ&s",
  },
  {
    username: "Bhide",
    description:
      "UI/UX designer passionate about minimal and clean layouts.",
    image:
      "https://i.pinimg.com/236x/45/54/b5/4554b5e05730c77e522cb2f09fd793b8.jpg",
  },
  {
    username: "Hathi",
    description:
      "Backend developer working with Node.js and MongoDB.",
    image:
      "https://i.pinimg.com/236x/61/94/de/6194de8f2d1410bd9c8b7390b12ef191.jpg",
  },
  {
    username: "Couple",
    description:
      "Machine learning student exploring AI projects.",
    image:
      "https://i.pinimg.com/736x/75/b4/66/75b466c4f20cfa1da71b1c00c72edfd7.jpg",
  },
];

const container = document.querySelector(".card-container");
const searchInput = document.querySelector(".bar");

// Function to display cards
function displayCards(data) {
  container.innerHTML = "";

  data.forEach((user) => {
    const card = `
      <div class="card">
        <img src="${user.image}" alt="image" class="img" />
        <div class="blur"></div>
        <div class="content">
          <h2>${user.username}</h2>
          <p class="card-text">${user.description}</p>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Initial display
displayCards(users);

// Search functionality
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = users.filter((user) =>
    user.username.toLowerCase().includes(value) ||
    user.description.toLowerCase().includes(value)
  );

  displayCards(filtered);
});