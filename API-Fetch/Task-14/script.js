function loadGhibliFilms() {
    const grid = document.querySelector("#movieGrid");

    fetch("https://ghibliapi.vercel.app/films")
        .then(res => res.json())
        .then(films => {
            const html = films.map(movie => {
                // Logic to color the score badge
                const score = parseInt(movie.rt_score);
                const scoreColor = score >= 90 ? 'text-green-400' : 'text-yellow-400';

                return `
                    <div class="bg-stone-800 rounded-lg p-6 shadow-2xl border border-stone-700 hover:border-yellow-600 transition-colors group">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h2 class="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">${movie.title}</h2>
                                <p class="text-stone-500 text-sm font-medium uppercase tracking-widest">${movie.original_title}</p>
                            </div>
                            <div class="text-right">
                                <span class="text-xs text-stone-400 block uppercase">RT Score</span>
                                <span class="${scoreColor} font-mono font-bold text-xl">${score}%</span>
                            </div>
                        </div>

                        <p class="text-stone-300 text-sm leading-relaxed mb-6 line-clamp-3">
                            ${movie.description}
                        </p>

                        <div class="flex items-center gap-4 text-xs text-stone-400 border-t border-stone-700 pt-4">
                            <span>📅 ${movie.release_date}</span>
                            <span>⏱️ ${movie.running_time} mins</span>
                            <span>🎬 ${movie.director}</span>
                        </div>
                    </div>
                `;
            }).join("");

            grid.innerHTML = html;
        })
        .catch(err => {
            console.error("Vault error:", err);
            grid.innerHTML = `<p class="col-span-full text-center text-red-400">The forest spirits are sleeping. Please try again later.</p>`;
        });
}

loadGhibliFilms();