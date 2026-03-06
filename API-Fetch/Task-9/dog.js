function getDog() {

    fetch("https://dog.ceo/api/breeds/image/random")

        .then((response) => response.json())

        .then((data) => {

            console.log(data);

            let dogImage = document.querySelector("#dogImage");

            dogImage.src = data.message;

        })

        .catch((error) => {
            console.log(error);
        });

}

getDog();