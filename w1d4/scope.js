// {
//   const item = 'spicy meatball';
// }
//
// {
//   var item = 'spicy meatball';
// }
//
// console.log(item);

// this is why we typically stick with let and const. to avoid issues
// with scope

// const words = "that's a...";
//
// {
//   const item = "spicy meatball";
//   const start = "mama mia!"
//   {
//     console.log(start);
//     console.log(words);
//     console.log(item);
//   }
// }

// {
//    beefy = "the beefy boy";
// }
//
// console.log(beefy);

// var(i = 0; i < 10; i++){
//   console.log("inside: " + i)
// }
//
// console.log("outside: " + i);


const checkSquare = (number) => {
  return Math.sqrt(number);
}

console.log(checkSquare(36));
console.log(checkSquare(35));
