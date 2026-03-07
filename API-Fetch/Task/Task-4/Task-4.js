function showProducts() {

    fetch("https://dummyjson.com/products")

        .then((response) => {
            return response.json();
        })

        .then((data) => {

            console.log(data);

            data.products.forEach((product) => {
                renderUI(product);
            });

        });

}

showProducts();


function renderUI(product) {

    let container = document.querySelector("#productContainer");

    container.innerHTML += `

<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

<div class="relative">

<img src="${product.thumbnail}" 
class="w-full h-48 object-cover">

<span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
-${product.discountPercentage}%
</span>

</div>

<div class="p-4 flex flex-col justify-between">

<h2 class="font-bold text-gray-800 mb-2">
${product.title}
</h2>

<p class="text-sm text-gray-500 mb-3">
Category: ${product.category}
</p>

<div class="flex justify-between items-center">

<span class="text-lg font-bold text-indigo-600">
$${product.price}
</span>

<span class="text-yellow-500 text-sm">
⭐ ${product.rating}
</span>

</div>

<button class="mt-4 bg-indigo-500 text-white text-sm py-2 rounded-lg hover:bg-indigo-600 transition">
View Product
</button>

</div>

</div>

`;

}