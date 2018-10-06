class Person {
  constructor(name, age, weight, mood, pets, bank){
    this.name = name,
    this.age = age,
    this.weight = weight,
    this.mood = mood,
    this.pets = [],
    this.bankAccount = bank
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
  getWeight(){
    return this.weight;
  }
  greet(other_person){
    "Hi " + other_person + " how are you?";
  }
  eat(){
    this.weight += 1;
    this.mood += 1;
  }
  exercise(){
    this.weight -= 1;
  }
  age(){
    this.age += 1;
    this.weight += 1;
    this.mood -= 1;
    this.bank += 10;
  }
  buyPet(pet){
    this.pets.push(pet);
    this.mood += 10;
    this.bank = this.bank - (pet.getPrice("Chief"))
  }
}

// const me = new Person("Mike", 29, "Male");
const emma = new Person("Emma", 28, "Female");
const me = new Person("Mike", 29, 190, 6, "Chief", 25000);
me.buyPet("Chief");
console.log(me);



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
  getPrice(pet){
    return pet.price;
  }
}

class Cat extends Pet {
  constructor(name, price){
  super(name);
  this.price = price;
}
purr(){
  console.log("purrrr")
}
clean(){
  console.log("cleaning")
}
getPrice(pet){
  return pet.price
}
}

// const Chief = new Pet("Chief", 4, "black", 70, me);
// this.owner = Chief.setOwner(emma);
// const Chief = new Dog("Chief", 175);
// Chief.setOwner(me);
//
// console.log(Chief.getPrice());

const Sparkles = new Cat("Sparkles", 8000);
Sparkles.age = 1;
Sparkles.color = "white";
Sparkles.weight = 12;
Sparkles.owner = emma;
console.log(Sparkles.getPrice());

console.log(Sparkles);
