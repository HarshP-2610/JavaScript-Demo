function fetchGallery() {
    const grid = document.querySelector("#galleryGrid");
    grid.innerHTML = `<p class="text-center py-10 text-gray-400">Developing film...</p>`;

    // Generate a random page number (1 to 10) to get different images each time
    const randomPage = Math.floor(Math.random() * 10) + 1;

    fetch(`https://picsum.photos/v2/list?page=${randomPage}&limit=20`)
        .then(res => res.json())
        .then(images => {
            const html = images.map(img => {
                // We can request a smaller version of the image for better performance
                // By replacing the width/height at the end of the URL
                const optimizedUrl = img.download_url.split('/').slice(0, -2).join('/') + '/600/800';

                return `
                    <div class="relative group overflow-hidden rounded-xl break-inside-avoid">
                        <img src="${optimizedUrl}" 
                             alt="Photo by ${img.author}" 
                             class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700">
                        
                        <div class="img-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <p class="text-white text-xs uppercase tracking-widest font-semibold">Photographer</p>
                            <h3 class="text-white font-bold text-lg">${img.author}</h3>
                            <a href="${img.url}" target="_blank" class="text-gray-300 text-[10px] mt-1 hover:text-white underline">
                                View Original
                            </a>
                        </div>
                    </div>
                `;
            }).join("");

            grid.innerHTML = html;
        })
        .catch(err => {
            console.error("Gallery error:", err);
            grid.innerHTML = `<p class="text-red-500">Failed to load images.</p>`;
        });
}

// Initial call
fetchGallery();