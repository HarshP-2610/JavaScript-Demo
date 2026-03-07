function getAdvice() {
    const adviceElement = document.querySelector("#adviceText");

    // Set a loading state while fetching
    adviceElement.innerText = "Searching for wisdom...";

    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json(); // We use .json() here because the API returns an object
        })
        .then((data) => {
            console.log(data);
            // Accessing the specific advice property from the returned object
            adviceElement.innerText = `"${data.slip.advice}"`;
        })
        .catch((error) => {
            console.error("Error fetching advice:", error);
            adviceElement.innerText = "Oops! The oracle is tired. Try again later.";
        });
}

// Call the function once on page load
getAdvice();