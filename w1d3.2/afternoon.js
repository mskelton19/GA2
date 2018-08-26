// const randomThings = [1, 10, "Hello", true];
//
// console.log(randomThings[0]);
//
// randomThings[2] = "World";
//
// console.log(randomThings[2]);

// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];
//
// console.log(ourClass[2]);
//
// ourClass[2] = "Octocat";
//
// console.log(ourClass[2]);
//
// ourClass[4] = "Cloud City";
//
// console.log(ourClass);

// const myArray = [5, 10, 500, 200];
//
// myArray.push("Egon");
//
// console.log(myArray);
//
// myArray.pop();
//
// console.log(myArray);
//
// myArray.splice(2, 0, "Hello");
//
// console.log(myArray);
//
// myArray.unshift("Bob Marley");
//
// console.log(myArray);
//
// myArray.reverse();
//
// console.log(myArray);

// var myNumber = 6;
//
// console.log(myNumber);
//
// if (myNumber < 5) {
//   console.log("Little Number")
// } else if (myNumber > 10){
//   console.log("Big Number")
// } else {
//   console.log("monkey");
// }

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Kristen is rock that " + kristynsCloset[3] + " today!");

kristynShoe = kristynsCloset[0];

kristynsCloset.shift();

console.log(kristynsCloset);
console.log(kristynShoe);

kristynsCloset.splice(5, 0, "rayban");

console.log(kristynsCloset);

kristynsCloset[4] = "stained knit hat";

console.log(kristynsCloset);
