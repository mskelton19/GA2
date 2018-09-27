let money = 0;
let days = 0;
let scissors = 0;
let pushMower = 0;
let powerMower = 0;

let cutTeeth = () => {
  money += 1;
  days += 1;
  console.log("Days: " + days + " Money: " + money);
  game();
}

let buyScissors = () => {
  if(money >= 5 && scissors < 1){
    scissors += 1;
    money -= 5;
    console.log("Days: " + days + " Money: " + money);
    game();
  } else if(money < 5){
    alert("You do not have enough money to buy scissors");
    game();
  } else {
    alert("You already own scissors");
    game();
  }
}

let cutScissors = () => {
  if(scissors == 1){
  money += 5;
  days += 1;
  console.log("Days: " + days + " Money: " + money);
  game();
} else {
  alert("You don't own any scissors");
  game();
}
}

let buyPush = () => {
  if(money >= 25 && scissors == 1 && pushMower < 1){
    pushMower += 1;
    money -= 25;
    console.log("Days: " + days + " Money: " + money);
    game();
  } else if(money < 25){
    alert("You don't have enough for a push mower");
    game();
  } else if(scissors < 1) {
    alert("You must buy scissors first");
  } else {
    alert("You already own a push mower");
    game();
  }
}

let cutPushMower = () => {
  if(pushMower == 1){
  days += 1;
  money += 50;
  console.log("Days: " + days + " Money: " + money);
  game();
} else {
  alert("You don't have a push mower");
}
}

let buyPower = () => {
  if(money >= 25 && pushMower == 1 && powerMower < 1){
    money -= 250;
    days += 1;
    powerMower += 1;
    console.log("Days: " + days + " Money: " + money);
    game();
  } else if(money < 25){
    alert("You don't have enough money for a power mower");
    game();
  } else if(pushMower < 1){
    alert("You have to purchase a push mower before you can purchase a power mower");
    game();
  } else if(powerMower == 1){
    alert("You already have a power pwer");
    game();
  }
}

let cutPowerMower = () => {
  if(powerMower == 1){
    money += 100;
    days += 1;
    console.log("Days: " + days + " Money: " + money);
    game();
  }
}



const game = () => {
// Check what action the user wants to take. Buy/work
let toDo = prompt("What do you want to do?", "Work, Buy");

// If the user says work
if(toDo == "work" || toDo === "Work"){

// Check which item they want to use
  let equipment = prompt("What equipment will you use?", "Teeth, Scissors")

  if(equipment === "Teeth" || equipment === "teeth"){
    cutTeeth();
  } else if(equipment === "Scissors" || equipment === "scissors"){
    cutScissors();
  } else if(equipment === "Push Mower" || equipment === "push mower" || equipment === "Push mower"){
    cutPushMower();
  } else if(equipment === "Power Mower" || equipment === "power mower" || equipment === "Power mower"){
    cutPowerMower();
  } else {
    alert("No match found, please retry");
    game();
  }

// If they say Buy
} else if(toDo === "Buy" || toDo === "buy"){

  // prompt user for what they want to purchase
  let purchase = prompt("What equipment will you buy?", "Scissors")

  // if they choose to buy Scissors
  if(purchase === "Scissors" || purchase === "scissors"){
    buyScissors();
  } else if(purchase === "Push Mower" || purchase === "push mower" || purchase === "Push mower"){
    buyPush();
  } else if(purchase === "Power Mower" || purchase === "power mower" || purchase === "Power mower"){
    buyPower();
  } else {
    alert("No match found, please retry");
    game();
  }
} else {
    alert("No match found, please retry");
    game();
}
}

game();

// Closes game function
