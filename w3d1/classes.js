// class Person {
//   constructor(name, age, eyes, hair){
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//   }
//   setHair(hairColor){
//     this.hair = hairColor;
//   }
//   greet(otherPerson){
//     console.log("hi " + otherPerson + "!");
//   }
//   jump(){
//     console.log("jumping")
//   }
// };
//
// class SuperHero extends Person {
//   fly(){
//     console.log("up up and away");
//   }
//   greet(otherPerson){
//     console.log("hi " + otherPerson + "!");
//   }
//   jump(){
//     super.jump();
//     this.fly();
//   }
//
// };
//
// const me = new Person("Mike", 29, "hazel", "brown");
// const superman = new SuperHero("Emma", 28, "blue", "brown");
// // me.greet('bob');
// // me.jump();
// // console.log(me);
//
// me.hair = "black";
// // console.log(me);
// me.setHair("brown");
// superman.fly();
// superman.greet('bob');
// console.log(superman);
// console.log(me);


class Car {
  constructor(serialNumber){
    this.serialNumber = serialNumber;
  }
  drive(){
    console.log("vroom")
  }
}

const factory = {
  cars: [],
  generateCar(){
    const newCar = new Car(this.cars.length);
    this.cars.push(newCar);
    return newCar;
  },
  findCar(index){
    return this.cars[index];
  }
}

factory.generateCar();
factory.generateCar();
// console.log(factory);
console.log(factory.findCar(1));
