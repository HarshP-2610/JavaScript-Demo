function showRecipes() {

    fetch("https://dummyjson.com/recipes")

        .then((response) => {
            return response.json();
        })

        .then((data) => {

            console.log(data);

            data.recipes.slice(0, 20).forEach((recipe) => {
                renderUI(recipe);
            });

        });

}

showRecipes();


function renderUI(recipe) {

    let container = document.querySelector("#recipeContainer");

    container.innerHTML += `

<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

<img src="${recipe.image}" 
class="w-full h-48 object-cover">

<div class="p-4">

<h2 class="font-bold text-gray-800 mb-2">
${recipe.name}
</h2>

<p class="text-sm text-gray-500 mb-2">
Cuisine: ${recipe.cuisine}
</p>

<div class="flex justify-between text-sm text-gray-600 mb-3">

<span>⏱ ${recipe.cookTimeMinutes} min</span>
<span>⭐ ${recipe.rating}</span>

</div>

<div class="text-xs text-gray-400 mb-3">
Difficulty: ${recipe.difficulty}
</div>

<button class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
View Recipe
</button>

</div>

</div>

`;

}