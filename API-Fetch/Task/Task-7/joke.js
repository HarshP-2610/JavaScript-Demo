function getJoke() {

    fetch("https://teehee.dev/api/joke")

        .then((response) => response.json())

        .then((data) => {

            console.log(data);

            let joke = document.querySelector("#jokeText");

            joke.innerText = data.question + " " + data.answer;

        })

        .catch((error) => {
            console.log(error);
        });

}

getJoke();