function getWeather() {

    let city = document.querySelector("#city").value;

    let url = `https://wttr.in/${city}?format=j1`;

    fetch(url)

        .then((response) => response.json())

        .then((data) => {

            console.log(data);

            let temp = data.current_condition[0].temp_C;
            let weather = data.current_condition[0].weatherDesc[0].value;
            let humidity = data.current_condition[0].humidity;

            document.querySelector("#weatherResult").innerHTML = `
<h2 class="text-xl font-semibold">${city}</h2>
<p>Temperature: ${temp} °C</p>
<p>Weather: ${weather}</p>
<p>Humidity: ${humidity}%</p>
`;

        })

        .catch((error) => {
            console.log(error);
        });

}