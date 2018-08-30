// const printBoo = () => {
//   console.log("====");
//   console.log("Boo!");
//   console.log("====");
// }
//
// printBoo();

// const printSum = (number) => {
//   console.log(number + number);
// }
//
// printSum(10);
//
// var triangle = "";
//
// const printTriangle = (number) => {
//   for(i = 0; i < number; i++){
//     triangle += "+";
//     console.log(triangle);
//   }
// }
//
// printTriangle(6);

// const sayName = (name) => {
//   console.log(name);
// }
//
// sayName("Mike");
// sayName("Emma");
// sayName("Chief");
// sayName("Millie");

// const printParameter = (input) => {
//   console.log(input)
// }
//
// printParameter(10);

// const getLastElement = (arr) => {
//   console.log(arr[arr.length - 1])
// }
//
// getLastElement(["Mike", "Emma", "Millie", "Chief"]);


// const multiply = (num1, num2) => {
//   console.log(num1 * num2);
// }
//
// multiply(5, 10);
//
// const getSentence = (word1, word2, word3) => {
//   console.log(word1 + " " + word2 + " " + word3)
// }
//
// getSentence("Chiefy", "Beefy", "boy");

// const divideThreeNums = (num1, num2, num3) => {
//   console.log((num3/num2)/num1);
// }
//
// divideThreeNums(2, 10, 100);


// const ten = () => {
//   return 10;
// }
//
// console.log(8 + ten());


// const calculateArea = (width, length) => {
//   return length * width;
// }
//
// // calculateArea(4, 5);
//
// console.log(calculateArea(4, 5));
// console.log(calculateArea(6, 2));


// const createString = (num1, num2, num3) => {
//   var overallNum = num1 + num2 + num3;
//   return overallNum.toString();
// }
//
// console.log(createString(2, 3, 4));

// const confirmTrue = (string1, string2) => {
//   if(string1 === string2){
//     return true;
//   } else {
//     return false;
//   }
// }
//
//
// console.log(confirmTrue("Hello", "Emma"));
// console.log(confirmTrue("Mike", "Mike"));

// start function
// const palindromeCheck = (word) => {
//
// var splitArray = word.split("");
// var reverseArray = word.split("").reverse();
// var sum = 0;
//
// for(i = 0; i < reverseArray.length; i++){
//   if(reverseArray[i] === splitArray[i]){
//     sum += 1;
//   } else {
//     sum += 0;
//   }
// }
//
// if(sum/reverseArray.length === 1){
//   return true;
// } else {
//   return false;
// }
// }
//
// console.log(palindromeCheck("emma"));
// console.log(palindromeCheck("racecar"));

const palindromeNumCheck = (number) => {

var sum2 = 0;
var numString = number.toString();
var numSplit = numString.split("");
var numSplitRev = numString.split("").reverse();

for(i = 0; i < numSplit.length; i++){
  if(numSplit[i] === numSplitRev[i]){
    sum2 += 1
  } else {
    sum2 += 0;
  }
}

if(sum2/numSplitRev.length === 1){
  return true;
} else {
  return false;
}
}

// console.log(palindromeNumCheck(245));
// console.log(palindromeNumCheck(364463));

const getNumber = () => {

for(i = 1; i < 100; i++){
  var num1 = i;
  palindromeNumCheck(num1);
}
}

getNumber();
