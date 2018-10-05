class Person {
  constructor(name, age, gender){
    this.name = name,
    this.age = age,
    this.gender = gender
  }
}

const me = new Person("Mike", 29, "Male");
const emma = new Person("Emma", 28, "Female");
// console.log(me);

class Pet {
  constructor(name, age, color, weight, owner){
  this.name = name,
  this.age = age,
  this.color = color,
  this.weight = weight
  this.owner = owner
  }
  setOwner(person){
    this.owner = person
  }
}

class Dog extends Pet {
  constructor(name, price){
    super(name);
    this.price = price;
  }
  getPrice(){
    return this.price;
  }
}

// const Chief = new Pet("Chief", 4, "black", 70, me);
// this.owner = Chief.setOwner(emma);
const Chief = new Dog("Chief", 175);
Chief.setOwner(me);

console.log(Chief.getPrice());
