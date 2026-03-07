function getDisneyCharacters() {
    const container = document.querySelector("#disneyContainer");

    // We fetch the first page of characters (50 items by default)
    fetch("https://api.disneyapi.dev/character")
        .then((response) => response.json())
        .then((res) => {
            const characters = res.data; // The array is inside the 'data' property

            // Generate HTML for each character
            const htmlContent = characters.map((char) => {
                // Some characters might not have films, so we check the length
                const filmCount = char.films.length;

                return `
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border-b-4 border-rose-500">
                        <div class="h-64 overflow-hidden bg-gray-200">
                            <img src="${char.imageUrl || 'https://via.placeholder.com/300'}" 
                                 alt="${char.name}" 
                                 class="w-full h-full object-cover">
                        </div>
                        <div class="p-5">
                            <h2 class="text-xl font-bold text-gray-800 truncate">${char.name}</h2>
                            
                            <div class="mt-3 flex items-center justify-between">
                                <span class="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full">
                                    ${filmCount} ${filmCount === 1 ? 'Film' : 'Films'}
                                </span>
                                <a href="${char.sourceUrl}" target="_blank" class="text-rose-500 text-sm font-semibold hover:underline">
                                    Details →
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            }).join("");

            container.innerHTML = htmlContent;
        })
        .catch((error) => {
            console.error("Error fetching Disney data:", error);
            container.innerHTML = `<p class="col-span-full text-center text-red-500">Failed to load Disney Magic.</p>`;
        });
}

getDisneyCharacters();