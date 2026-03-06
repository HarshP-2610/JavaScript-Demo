function GetPassword() {

    fetch("https://answerbook.david888.com/RandomPassword")

        .then((response) => response.text())

        .then((data) => {
            console.log(data);

            document.querySelector("#passwordText").innerText = data;
        })

        .catch((error) => {
            console.log(error);
            document.querySelector("#passwordText").innerText = "Failed to generate password.";
        });

}

GetPassword();