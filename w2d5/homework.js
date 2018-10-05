// let clicker = {
//   clickCount: 0,
//   click(){
//     this.clickCount += 1;
//     console.log(this.clickCount);
//   }
// }
// // clicker.click();
//
// const myInformation = {
//   name: "Mike",
//   age: 29,
//   fact: "I am pursuing my MBA",
//   statement(){
//     return ("My name is " + this.name + ", I'm " + this.age + " and I'm " + this.fact)
//   },
//   addAge(){
//     return(this.age += 1);
//   },
//   changeName(){
//     return(this.name = "Michael");
//   }
// }
//
// // console.log(myInformation.statement());
// // console.log(myInformation.addAge());
//
// console.log(myInformation.age + 5);
// console.log(myInformation.changeName());

//  Greeter
// const greeter = {
//   hello(name){
//     return("Hello, " + name + ". How are you today?")
//   },
//   goodbye(name){
//     return("Peace out, " + name + "!")
//   },
//   whoAreYou(name){
//     return("Oh right! " + name + "! How could I forget?")
//   }
// }
//
// console.log(greeter.hello("Mike"));
// console.log(greeter.goodbye("Billy"));
// console.log(greeter.whoAreYou("Emma"));

// Collecting Strings
// const stringCollector = {
//   collection: [],
//   collect(string){
//     var splitString = string.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     this.collection.push(joinArray);
//     return this.collection;
//   }
// }
//
// console.log(stringCollector.collect("Mike"));

// ATM
// let atm = {
//   totalCash: 1000,
//   dispenseTwenties(num){
//     if(num * 20 <= this.totalCash){
//       this.totalCash -= num * 20
//       return this.totalCash;
//     } else {
//       return null;
//     }
//   }
// }
//
// console.log(atm.dispenseTwenties(10))

// Hungry Turtles
// let calculator = {
//   output: 0,
//   multiply(num1, num2){
//     this.output = num1 * num2;
//     return this.output;
//   },
//   divide(num1, num2){
//     this.output = num1/num2;
//     return this.output;
//   }
// }
//
// console.log(calculator.divide(8, 2));

// Iterators
// for each
// const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
//
// words.forEach(element =>{
//   console.log(element)
// })

// map

// let array1 = [3,6,9]
// const map1 = array1.map(x => x/3);
//
// console.log(map1);

// chaining

//  reduce
// const arr = [8, 8, 8, 8, 8, 8, 8, 8];
// const reducer = (sum, value) => {
//   return sum += value
// };
//
// console.log(arr.reduce(reducer));
