const age = 23;

if(age >= 18){
    console.log("wine 🍷");
}else{
    console.log("water 💧")
}

// ///other way

let drink;
if(age >= 18){
    drink = "wine 🍷";
}else{
    drink = "water 💧";
}
console.log(drink);

// other way ternary

const drink2 = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);


const tip = 275/100;
console.log(tip);