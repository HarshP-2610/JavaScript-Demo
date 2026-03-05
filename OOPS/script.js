// Object Oriented Javascript
// 00PS
// dar vakhat blueprint banavo ke object kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi nava nava objects banvani sakiye chhiye tene j kevaay chhe Object Oriented Programming
// blueprint(object kevo dekhase, object ma su method) --> based on blueprint create objects
// blueprint -- contructor
// function based contructor --> Contructor Function --> function Name always start with Capital letter

function CreatePencil(name, price, color) {
    console.log(this);
    this.name = name;
    this.price = price;
    this.color = color;

    this.write = function (msg) {
        let h2 = document.createElement("h2");
        h2.textContent = msg;
        h2.style.color = this.color;
        document.body.appendChild(h2);
    };
}

let pencil1 = new CreatePencil("Natraj", 3, "red");
let pencil2 = new CreatePencil("Apsara", 5, "blue");

// jo construction function koi field tena prototype ma add
// (attehch) kari de to te field badha object ma available thase

CreatePencil.prototype.shape = "round";

// what is prototype: prototype is a property of function which is
// used to add new field to all the object created by that function

// Class in JavaScript
// class is a syntatical sugar over construction function, class
// apde constructor function no upyog kariye chhiye

// why use class: class is more readable and easier to understand
// than construction function
class CreatePen {
    constructor(name, price, qty, color) {
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.color = color;

        // write
        this.write = function (msg) {
            let h1 = document.createElement("h1");
            h1.textContent = msg;
        }
    }
}

// extends --> super
// create a new class that hold old class value and also have some new values
// copy old class and add new value
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = "user";
    }
}

let user = new User("test", "test@test.com", "abc@123");
console.log("user", user);

class Admin extends User {
    constructor(name, email, password, rights) {
        super(name, email, password); // extends class constructor --> super
        this.role = "admin";
        this.rights = rights;
    }
}

let admin = new Admin(
    "admin",
    "admin@admin.com",
    "abc@123",
    "delete user, edit user, create user",
);
console.log(admin);

// prototypal inheritance vs classical inheritance
// classical Inheritance -- create a classes and extends their classes

// inheritance meaning --> class to class inheritance (copy one class into another class)

// prototypal inheritance --> object to object
// ek object chhe tene tame all props/methods ne inherit kari chho
// ke nava object ma

let coffee = {
    color: "black",
    create: function () {
        console.log("Creating A Coffee");
    },
};

console.log(coffee);

let americano = Object.create(coffee);
americano.taste = "";
console.log(americano);

// create form that can save data into local storage with help of using OOPS (only)