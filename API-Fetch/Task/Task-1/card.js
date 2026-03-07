function ShowUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((rawdata) => {
            console.log(rawdata);
            return rawdata.json();
        })
        .then((data) => {
            console.log(data);

            data.forEach((user) => {
                RenderUi(user);
            });
        });
}

ShowUsers();

function RenderUi(user) {

    let container = document.querySelector("#cardContainer");

    container.innerHTML += `
    
    <div class="flip-card bg-transparent w-full h-80 group perspective">
      <div class="flip-card-inner relative w-full h-full text-center shadow-lg rounded-xl cursor-pointer">
        
        <div class="flip-card-front absolute w-full h-full bg-white rounded-xl p-6 flex flex-col justify-between border border-gray-200">
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              ${user.name.charAt(0)}
            </div>
            <h2 class="text-xl font-bold text-gray-800">${user.name}</h2>
            <p class="text-indigo-500 font-medium">@${user.username}</p>
          </div>
          
          <div class="text-sm text-gray-500 border-t pt-4">
            <p class="font-semibold text-gray-700">${user.company.name}</p>
            <p class="italic text-xs">"${user.company.catchPhrase}"</p>
          </div>
          <div class="mt-2 text-xs text-indigo-400 font-bold uppercase tracking-wider">Hover to Flip</div>
        </div>

        <div class="flip-card-back absolute w-full h-full bg-indigo-600 text-white rounded-xl p-6 flex flex-col justify-center text-left">
          <h3 class="text-lg font-bold mb-4 border-b border-indigo-400 pb-2">Contact Details</h3>
          
          <div class="space-y-3 text-sm">
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <span class="underline">${user.website}</span></p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
          </div>

          <div class="mt-6 flex items-center gap-2 bg-indigo-700 p-2 rounded text-[10px]">
            <span class="opacity-75">GEO:</span>
            <span>Lat: ${user.address.geo.lat}</span>
            <span>Lng: ${user.address.geo.lng}</span>
          </div>
        </div>

      </div>
    </div>
    `;
}