// parameter: variable in a definition method; what you ask for

// arguments: what you actually send into a function

const sumDigits = (number) => {
  number.toString().split("");

  for(let i = 0; i < number.length; i++){
    number[i].parseInt();
    console.log(number[i]);
  }
}

sumDigits(43);
