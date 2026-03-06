// Fetch Apis Using Fetch method

// fetch API is used to make network requests and handle responses
// in JavaScript. It provides a modern and flexible way to interact
// with APIs and retrieve data from servers. The Fetch API is built
// on top of Promises, which allows for easier handling of
// asynchronous operations.

// HTTP Basics: HTTP (Hypertext Transfer Protocol) is the
// foundation of data communication on the web. It defines how
// messages are formatted and transmitted between clients (like
// browsers) and servers. HTTP uses methods like GET, POST, PUT,
// DELETE, etc. to perform different actions on resources.
// Understanding HTTP basics is crucial for working with APIs and
// making network requests effectively.

// fetch --> then --> then --> catch

function usersData() {

    fetch("https://randomuser.me/api/?results=100")

        .then((rawdata) => {
            return rawdata.json();
        })

        .then((data) => {

            let users = data.results;
            let index = 0;

            function showUser() {

                let user = users[index];

                document.getElementById("photo").src = user.picture.large;

                document.getElementById("fullname").textContent =
                    user.name.first + " " + user.name.last;

                document.getElementById("email").textContent = user.email;

                document.getElementById("phone").textContent = user.phone;

                document.getElementById("location").textContent =
                    user.location.city + ", " + user.location.country;

                index++;

                if (index >= users.length) {
                    index = 0;
                }

            }

            showUser();

            setInterval(showUser, 2000);

        });

}

usersData();