function fetchAnimeMovies() {
    const grid = document.querySelector("#animeGrid");

    // Note: Jikan API has a rate limit, so we don't need a proxy usually, 
    // but we should handle the response carefully.
    fetch("https://api.jikan.moe/v4/anime?q=movie")
        .then(res => res.json())
        .then(res => {
            const animeList = res.data; // Jikan wraps results in 'data'

            const html = animeList.map(anime => {
                return `
                    <div class="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col hover:ring-2 ring-indigo-500 transition-all group">
                        <div class="relative h-80">
                            <img src="${anime.images.jpg.large_image_url}" 
                                 alt="${anime.title}" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            
                            <div class="absolute top-4 right-4 bg-indigo-600 text-white font-bold px-3 py-1 rounded-lg shadow-lg">
                                ${anime.score ? anime.score : 'N/A'}
                            </div>
                        </div>

                        <div class="p-6 flex flex-col flex-grow">
                            <h2 class="text-xl font-bold text-white mb-2 line-clamp-1" title="${anime.title}">
                                ${anime.title}
                            </h2>
                            
                            <p class="text-slate-400 text-sm line-clamp-3 mb-4 flex-grow">
                                ${anime.synopsis || "No description available."}
                            </p>

                            <div class="flex items-center justify-between pt-4 border-t border-slate-800">
                                <span class="text-xs font-semibold text-slate-500 uppercase">
                                    ${anime.year || 'Classic'}
                                </span>
                                <a href="${anime.url}" target="_blank" class="text-indigo-400 text-sm font-bold hover:text-indigo-300">
                                    View MAL →
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            }).join("");

            grid.innerHTML = html;
        })
        .catch(err => {
            console.error("Fetch error:", err);
            grid.innerHTML = `<p class="col-span-full text-center text-red-500">Failed to load anime list. The API might be busy.</p>`;
        });
}

fetchAnimeMovies();