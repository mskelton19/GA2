let money = 0;
let days = 0;
let scissors = 0;

let cutTeeth = () => {
  money += 1;
  days += 1;
  console.log("Days: " + days + " Money: " + money);
  game();
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
  }

// If they say Buy
} else if(toDo === "Buy" || toDo === "buy"){

  // prompt user for what they want to purchase
  let purchase = prompt("What equipment will you buy?", "Scissors")

  // if they choose to buy Scissors
  if(purchase === "Scissors" || purchase === "scissors"){
    buyScissors();
  }
}
}

game();

// Closes game function
