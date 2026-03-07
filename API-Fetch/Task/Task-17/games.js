function fetchGames() {
    const grid = document.querySelector("#gameGrid");
    const countDisplay = document.querySelector("#gameCount");

    // Using the CORS Proxy as requested
    const proxy = "https://corsproxy.io/?";
    const apiUrl = "https://www.freetogame.com/api/games";

    fetch(proxy + apiUrl)
        .then(res => {
            if (!res.ok) throw new Error("CORS or Network issue");
            return res.json();
        })
        .then(games => {
            // Update the count in the header
            countDisplay.innerText = games.length;

            // Show first 24 games
            const displayList = games.slice(0, 24);

            const html = displayList.map(game => {
                return `
                    <div class="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all group">
                        <div class="relative">
                            <img src="${game.thumbnail}" alt="${game.title}" class="w-full h-48 object-cover">
                            <span class="absolute bottom-2 right-2 bg-black/80 text-[10px] font-bold px-2 py-1 rounded text-cyan-400 uppercase">
                                ${game.genre}
                            </span>
                        </div>

                        <div class="p-5">
                            <h2 class="text-lg font-bold text-white truncate group-hover:text-cyan-400 transition-colors">
                                ${game.title}
                            </h2>
                            <p class="text-slate-400 text-xs mt-2 line-clamp-2 h-8">
                                ${game.short_description}
                            </p>

                            <div class="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
                                <span class="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                                    ${game.platform.includes("Windows") ? "💻 PC" : "🌐 Browser"}
                                </span>
                                <a href="${game.game_url}" target="_blank" class="text-xs bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded font-bold transition">
                                    PLAY NOW
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            }).join("");

            grid.innerHTML = html;
        })
        .catch(err => {
            console.error("Error:", err);
            grid.innerHTML = `<p class="col-span-full text-center text-red-400">Access Denied. Ensure the CORS proxy is working.</p>`;
        });
}

fetchGames();