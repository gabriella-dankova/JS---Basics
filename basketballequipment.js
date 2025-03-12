function basketballequipment (input){

let costPerYear = Number (input[0]);

let sneackers = costPerYear - costPerYear * 0.4;
let clothes = sneackers- sneackers * 0.2;
let ball = clothes * 1.0/4;
let accesories = ball *1.0/5;
let total = sneackers + clothes + ball + accesories + costPerYear;
console.log(total);

}

basketballequipment (["365 "]);