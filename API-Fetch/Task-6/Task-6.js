function showFruits() {

    fetch("https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/all")
        .then((response) => response.json())
        .then((data) => {

            console.log(data);

            let container = document.querySelector("#fruitContainer");
            container.innerHTML = "";

            data.forEach((fruit) => {

                container.innerHTML += `

<div class="bg-white rounded-xl shadow-md p-5 hover:shadow-xl">

<h2 class="text-lg font-bold text-green-600 mb-2">
${fruit.name}
</h2>

<p class="text-sm text-gray-600">Family: ${fruit.family}</p>
<p class="text-sm text-gray-600">Order: ${fruit.order}</p>
<p class="text-sm text-gray-600 mb-3">Genus: ${fruit.genus}</p>

<div class="border-t pt-3 text-sm text-gray-700">
<p>Calories: ${fruit.nutritions.calories}</p>
<p>Sugar: ${fruit.nutritions.sugar}</p>
<p>Carbs: ${fruit.nutritions.carbohydrates}</p>
<p>Protein: ${fruit.nutritions.protein}</p>
</div>

</div>

`;

            });

        })
        .catch((error) => {
            console.log("Error:", error);
        });

}

showFruits();