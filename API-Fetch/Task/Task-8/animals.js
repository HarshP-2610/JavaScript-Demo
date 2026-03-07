function showAnimals() {

    fetch("https://extinct-api.herokuapp.com/api/v1/animal")

        .then((response) => response.json())

        .then((data) => {

            console.log(data);

            let container = document.querySelector("#animalContainer");
            container.innerHTML = "";

            data.data.slice(0, 20).forEach((animal) => {
                renderUI(animal);
            });

        })

        .catch((error) => {
            console.log(error);
        });

}

showAnimals();


function renderUI(animal) {

    let container = document.querySelector("#animalContainer");

    container.innerHTML += `

<div class="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">

<h2 class="text-lg font-bold text-indigo-600 mb-2">
${animal.commonName}
</h2>

<p class="text-sm text-gray-600 mb-1">
Scientific Name: ${animal.binomialName}
</p>

<p class="text-sm text-gray-600 mb-1">
Location: ${animal.location}
</p>

<p class="text-sm text-gray-500 mt-2">
Last Record: ${animal.lastRecord}
</p>

</div>

`;

}