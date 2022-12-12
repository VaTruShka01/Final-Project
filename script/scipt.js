const pep = document.querySelector(".pepperoni")
const fCheese = document.querySelector(".fCheese")
const chicken = document.querySelector(".chicken")
const toppings = document.querySelectorAll(".topping")
const image = document.getElementById("image")
const total = document.getElementById("total")

let calc;
let chosen;

pep.addEventListener("click", e => {

image.src = "./images/Pepperoni.png"

    chosen = 1;
    calc = 10;
    totalF();
});

fCheese.addEventListener("click", e =>{

    image.src = "./images/4Cheeze.png"

    chosen = 2;
    calc = 15;
    totalF();
})

chicken.addEventListener("click", e =>{

    image.src = "./images/Chicken.png"

    chosen = 2;
    calc = 15;
    totalF();
})

toppings.forEach(function(item){
    item.addEventListener("click", e=>{
        calc++;

        if(chosen === 1 && calc > 16) {
            alert("You can't add more than 6 toppings!");
            calc = 16;
        }

        else if (chosen === 2 && calc > 21){
            alert("You can't add more than 6 toppings!");
            calc = 21;
        }

        totalF();
    });

    
});

function totalF () {
    total.textContent = "Total:" + calc;
};

