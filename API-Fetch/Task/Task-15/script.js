function fetchTVShows() {
    const grid = document.querySelector("#showGrid");

    fetch("https://api.tvmaze.com/shows")
        .then(res => res.json())
        .then(shows => {
            // We'll just take the first 20 shows for a clean display
            const topShows = shows.slice(0, 20);

            const html = topShows.map(item => {
                // Formatting genres into a string
                const genres = item.genres.join(" • ");
                // Handling missing ratings
                const rating = item.rating.average ? `⭐ ${item.rating.average}` : "No Rating";

                return `
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:ring-4 ring-red-600">
                            <img src="${item.image ? item.image.medium : 'https://via.placeholder.com/210x295?text=No+Image'}" 
                                 alt="${item.name}" 
                                 class="w-full h-auto object-cover">
                            
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                                <p class="text-xs font-bold text-red-500 mb-1">${genres}</p>
                                <button class="bg-white text-black text-xs font-bold py-2 rounded uppercase">Watch Details</button>
                            </div>
                        </div>
                        
                        <div class="mt-3">
                            <h2 class="text-sm font-bold truncate">${item.name}</h2>
                            <div class="flex justify-between items-center mt-1">
                                <span class="text-xs text-gray-500">${item.premiered ? item.premiered.split('-')[0] : 'N/A'}</span>
                                <span class="text-xs font-bold text-yellow-500">${rating}</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join("");

            grid.innerHTML = html;
        })
        .catch(err => {
            console.error("Signal lost:", err);
            grid.innerHTML = `<p class="col-span-full text-center text-red-500">Signal lost. Check your connection.</p>`;
        });
}

fetchTVShows();