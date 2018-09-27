// objects can have any data type as a value
// const adventurer = {
//   name: "Frodo",
//   hitpoints: 10,
//   belongings: ['Sting', 'The Ring', 'Lembas'],
//   companion: {
//               name: "Sam",
//               type: "Hobbit",
//               companion: {
//                             name: "Pippen",
//                             type: "Hobbit",
//                             belongings: ["Breakfast", "Second Breakfast"]
//                           }
//              }
// }
// // console.log(adventurer.belongings[1]);
// // adventurer.belongings.push('Vogue Magazine');
//
// // for(let i = 0; i < adventurer.belongings.length; i++){
// //   console.log(adventurer.belongings[i]);
// // }
//
// // console.log(adventurer);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.companion.belongings);
// adventurer.companion.name = "Pippen";
// console.log(adventurer.companion.name);

// Arrays can contain objects
// var movies = [{title: "Toy Story"}, {title: "Paul Blart"}, {title: "Caddyshack"}];
//
// // console.log(movies[1].title);
//
// for(let i = 0; i < movies.length; i++){
//   console.log(movies[i].title);
// }
// const monster = {
//                   name: "Slimer",
//                   age: 6
//                 }
// const someVar = 'name';
//
// console.log(monster[someVar]);

// const movie = { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 }
// // for(let key in movie){
// //   console.log(key);
// // }
// //
// const keys = Object.keys(movie);
// for(var i = 0; i < keys.length; i++){
//   console.log(movie[keys[i]]);
// }

const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 }

const keys = Object.keys(movie);

for(let i = 0; i < movie.length; i++){
  console.log(movie[i]);
}

const movies = [
               { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
               { title: "Eraserhead", director: "David Lynch", year: 1978 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
             ]
