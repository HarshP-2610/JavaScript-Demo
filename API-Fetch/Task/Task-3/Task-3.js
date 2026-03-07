function showPosts() {

    fetch("https://jsonplaceholder.typicode.com/posts")

        .then((response) => {
            return response.json();
        })

        .then((data) => {

            console.log(data);

            data.slice(0, 30).forEach((post) => {
                renderUI(post);
            });

        });

}

showPosts();


function renderUI(post) {

    let container = document.querySelector("#postContainer");

    container.innerHTML += `

<div class="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition flex flex-col justify-between">

<div>

<div class="flex justify-between items-center mb-3">
<span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
User ${post.userId}
</span>

<span class="text-xs text-gray-400">
Post #${post.id}
</span>
</div>

<h2 class="text-lg font-bold text-gray-800 mb-3">
${post.title}
</h2>

<p class="text-gray-600 text-sm leading-relaxed">
${post.body}
</p>

</div>

<button class="mt-5 bg-indigo-500 text-white text-sm py-2 rounded-lg hover:bg-indigo-600 transition">
Read More
</button>

</div>

`;

}