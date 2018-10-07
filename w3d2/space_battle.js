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
// Create a class for ships
class Ship {
  constructor(hull, firepower, accuracy){
    this.hull = hull,
    this.firepower = firepower,
    this. accuracy = accuracy
  }
}

const USSSchwarzenneger = new Ship(20, 5, .7);
console.log(USSSchwarzenneger);

for(i = 0; i < 6; i++){
    aliens[i] = new Ship(
    this.hull = getRandomInt(3,6),
    this.firepower = getRandomInt(2,4),
    this.accuracy = getRandomVar(.6,.8))
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * ((max - min)) + min);
}

function getRandomVar(min, max){
  return Math.random() * ((max-min)) + min;
}
