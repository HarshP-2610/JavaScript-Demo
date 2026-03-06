function showComments() {

    fetch("https://jsonplaceholder.typicode.com/comments")

        .then((response) => {
            return response.json();
        })

        .then((data) => {

            console.log(data);

            data.slice(0, 30).forEach((comment) => {
                renderUI(comment);
            });

        });

}

showComments();


function renderUI(comment) {

    let container = document.querySelector("#commentContainer");

    container.innerHTML += `

<div class="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition">

<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
${comment.name.charAt(0)}
</div>

<div>
<h2 class="font-semibold text-gray-800">${comment.name}</h2>
<p class="text-sm text-indigo-500">${comment.email}</p>
</div>
</div>

<p class="text-gray-600 text-sm leading-relaxed">
${comment.body}
</p>

<div class="mt-4 pt-3 border-t text-xs text-gray-400">
Post ID : ${comment.postId}
</div>

</div>

`;

}