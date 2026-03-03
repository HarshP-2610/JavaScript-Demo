let d = 20;

function abc() {
  console.log(d);
}

function def() {
  let d = 25;
  abc();
}

def();

function parent() {
  let a = 12;
  return function () {
    console.log(a);
  };
}

let fnc1 = parent()();
console.log(fnc1);

// create toaster
function CreateToaster() {
  let toast = document.querySelector(".toast");

  return function (msg) {
    let div = document.createElement("div");
    div.className = `toaster bg-gray-800 text-white px-6 py-3 inline-block top-4 right-4 rounded-md pointer-event-none`;

    div.textContent = msg;

    toast.appendChild(div);
  };
}

let toaster = CreateToaster();

toaster("Welcome to profile");
toaster("You have 2 notification");
toaster("Product added / Uploaded Successfully");