let clicker = {
  clickCount: 0,
  click(){
    this.clickCount += 1;
    console.log(this.clickCount);
  }
}
// clicker.click();

const myInformation = {
  name: "Mike",
  age: 29,
  fact: "I am pursuing my MBA",
  statement(){
    return ("My name is " + this.name + ", I'm " + this.age + " and I'm " + this.fact)
  },
  addAge(){
    return(this.age += 1);
  },
  changeName(){
    return(this.name = "Michael");
  }
}

// console.log(myInformation.statement());
// console.log(myInformation.addAge());

console.log(myInformation.age + 5);
console.log(myInformation.changeName());