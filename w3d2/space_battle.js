// Programmed for and played in the console
// Will need to use pop-up prompts to get user input

// build a game of battling alien spaceships using JS

// We are operating the USS Schwarzenegger on a mission to destroy every last alien spaceships

// There are six alien ships
// Only attack one at a time
// Wait for the outcome of a battle before deploying another alien ships
// You always attack first
// Can retreat after you've defeated an alien

// Attack the first alien ship
// If the ship survives, it attacks You
// If you survive, you attack the ship again
// If it survives, it attacks you again




// If you destroy the ship, you have the option to attack the next ship or retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options
// You win if you destroy all the aliens
// You lose the game if you are destroyed


// Create a array of alien ships
let aliens = []
let currentAlien = null;
let round = 0;
let decision = null;
// Create a class for ships

function promptAttack(){
  console.log(decision)
if(decision === "yes"){
  alert("You're fighting Alien " + this.number);
  console.log(this.hull);
  let attack = prompt("Attack or retreat?");
  if(attack === "attack"){
    checkAccuracy();
  }
}
}

function newRound(){
  round += 1;
  currentAlien = Aliens[round];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min)) + min);
}

function getRandomVar(min, max) {
  return Math.random() * ((max-min)) + min;
}

function hitAlien(){
  this.hull -= USSSchwarzenneger.firepower;
  console.log(this.hull);
  if(this.hull <= 0){
    alert("Alien " + this.number + " destroyed");
    round += 1;

  } else {
    alert("Alien hit. Current alien hull: " + this.hull);
    alienAccuracy();
  }
}

function lose(){
  alert("You lost");
}

function alienHit(){
  USSSchwarzenneger.hull -= this.firepower;
  console.log("USS Hull: " + USSSchwarzenneger.hull);
  if(USSSchwarzenneger.hull <= 0){
    lose();
  } else {

  }
}

function alienAccuracy(){
  alert("Alien " + this.number + " is about to attack");
  if(Math.random() < this.accuracy){
    alert("You've been hit")
    alienHit();
  } else {
    console.log("You missed");

  }
}

function checkAccuracy(){
  if(Math.random() < USSSchwarzenneger.accuracy){
    hitAlien();
  } else {
    alert("You missed");
    alienAccuracy();
  }
}

class Ship {
  constructor(hull, firepower, accuracy){
    this.hull = hull,
    this.firepower = firepower,
    this. accuracy = accuracy
  }
}

const USSSchwarzenneger = new Ship(20, 5, .7);
// console.log(USSSchwarzenneger);

function createShips(){
for(i = 0; i < 6; i++){
    aliens[i] = new Ship(
    this.number = 1,
    this.hull = getRandomInt(3,6),
    this.firepower = getRandomInt(2,4),
    this.accuracy = getRandomVar(.6,.8))
  }
}

// console.log(aliens[0])

// Start the game
function start(){
  createShips();
  round = 1;
  decision = prompt("Start game?");
  currentAlien = aliens[0];
  console.log("Hull: " + this.hull);
  promptAttack();
  return decision;
}

console.log(start());



// Check to see if Schwarzenegger has any life

// Check which alien you're fighting


// if it has life, allow the user to decide if they want to attack

// if user attacks. run random function to check whether it's a hit
