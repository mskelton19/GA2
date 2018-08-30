// let numArray = [];
//
// const palindromeCheck = (number) => {
//   let sum = 0;
//
//   // console.log(number);
//
//   let numSplit = number.toString().split("");
//   let numReverse = number.toString().split("").reverse();
//
//   if(numReverse[0] === numSplit[0] && numReverse[1] === numSplit[1] && numReverse[2] === numSplit[2]) {
//       numArray.push(number);
//   }
// }
//
// for(i = 10; i < 100; i++){
//   let num = i;
//
//   palindromeCheck(num);
// }



// Actual project Euler problem
let numArray2 = [];

for(y = 1000; y >= 10; y--){
  num1 = y;

for(x = 1000; x >= 10; x--){
  if(x * y != 0){
  numArray2.push((x * y));
}
}
}

let palindromes = [];

for(i = 0; i < numArray2.length; i++){
  let numSplit = numArray2[i].toString().split("");
  let numReverse = numArray2[i].toString().split("").reverse();

  if(numSplit[0] === numReverse[0] && numSplit[1] === numReverse[1] && numSplit[2] === numReverse[2]){
    palindromes.push(numArray2[i]);
  }

}

function sortNumber(a, b){
  return b - a;
}

console.log(palindromes.sort(sortNumber));
