//setTimeout, setInterval, clearTimeout, clearInterval
//setTimeout: Executes a function after a specified delay (in milliseconds).
//setInterval: Executes a function repeatedly at specified intervals (in milliseconds).
//clearTimeout: Cancels a timeout set by setTimeout.
//clearInterval: Cancels an interval set by setInterval.

let timer = setTimeout(() => {
    console.log("Hello World")
}, 1000)
clearTimeout(timer)

let interval = setInterval(() => {
    console.log("Hello World")
}, 1000)
clearInterval(interval)


//counter 
let count = 0
let counter = setInterval(() => {
    console.log(count)
    count++
    if (count > 5) {
        clearInterval(counter)
    }
}, 1000)


//card offer timer

let card = document.querySelector(".card")
let btn = document.querySelector(".btn")

setTimeout(() => { card.style.display = "block" }, 5000)
btn.addEventListener("click", () => {
    card.style.display = "none"
})

let count1 = 0;

let bar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");

setTimeout(() => {
    if (count1 <= 100) {
        bar.style.width = `${ count1 }%`;
        percent.textContent = count1 + "%";
        count1++;
    }
}, 3000);

setInterval(() => {
    if (count <= 100) {
        console.log(count);
        bar.style.width = `${ count }%`;
        percent.textContent = count + "%";
        count++;
    }
}, 100);