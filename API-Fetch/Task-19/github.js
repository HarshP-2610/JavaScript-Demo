function fetchGitHubProfile() {
    const card = document.querySelector("#profileCard");
    // You can change 'HarshP-2610' to any GitHub username
    const username = "HarshP-2610";

    fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if (!res.ok) throw new Error("User not found");
            return res.json();
        })
        .then(user => {
            card.innerHTML = `
                <div class="flex flex-col items-center">
                    <img src="${user.avatar_url}" alt="${user.name}" 
                         class="w-32 h-32 rounded-full border-4 border-[#30363d] mb-4">
                    
                    <h1 class="text-2xl font-bold text-white">${user.name || user.login}</h1>
                    <p class="text-blue-400 font-medium text-sm">@${user.login}</p>
                    
                    <p class="text-center mt-4 text-gray-400 text-sm leading-relaxed">
                        ${user.bio || "This developer hasn't added a bio yet."}
                    </p>

                    <div class="grid grid-cols-3 gap-4 w-full mt-8 border-t border-[#30363d] pt-6 text-center">
                        <div>
                            <span class="block text-white font-bold">${user.public_repos}</span>
                            <span class="text-[10px] uppercase text-gray-500">Repos</span>
                        </div>
                        <div>
                            <span class="block text-white font-bold">${user.followers}</span>
                            <span class="text-[10px] uppercase text-gray-500">Followers</span>
                        </div>
                        <div>
                            <span class="block text-white font-bold">${user.following}</span>
                            <span class="text-[10px] uppercase text-gray-500">Following</span>
                        </div>
                    </div>

                    <div class="w-full mt-6">
                        <a href="${user.html_url}" target="_blank" 
                           class="block text-center bg-[#21262d] hover:bg-[#30363d] border border-[#f0f6fc1a] text-white py-2 rounded-lg font-semibold transition-all">
                           View GitHub Profile
                        </a>
                    </div>
                    
                    <p class="mt-4 text-[10px] text-gray-600">Joined: ${new Date(user.created_at).toLocaleDateString()}</p>
                </div>
            `;
        })
        .catch(err => {
            card.innerHTML = `<p class="text-red-500 text-center">${err.message}</p>`;
        });
}

fetchGitHubProfile();