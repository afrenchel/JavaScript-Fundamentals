'use strict';

//?Constructor functions//
//simulate classes
//build an object using a function
//constructor functions always start with a capital letter
//does not work with arrow function
const Person = function (firstName, birthYear) {
  //Instance propreties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //!Never create a method inside of a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('jonas', 1991); //we call the function with "new"
console.log(jonas);

//1.New emptty object is created
//2.Function is called, this = {}
//3.{} linked to prototype
//4.function automatically returns that {}

const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person); //check thaht jonas is istance of Person

//?Prototypes//
console.log(Person.prototype);

//prototypal inheritance
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//Setting proreties on the prototype

Person.prototype.species = 'Home sapiens';
console.log(jonas.species, matilda.species);

//hasOwnProperty works due to prototype chain
console.log(jonas.hasOwnProperty('species')); //false, it is not a direct proprety
console.log(jonas.hasOwnProperty('firstName')); //true

//Pr0totypal inheritance and the prototype chain

//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); //null

console.log(Person.prototype.constructor);

//Prototypal inheritance and the prototype chain on buil-in object(arrays)

const arr = [83, 64, 83, 6, 5, 6, 9];
console.log(arr.__proto__); //methods we already know( map,filter,reduce,slice,etc..)
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__);

//!Added a new method , all arrays will inherit this.Not a good idea , if you have a small project is ok.
Array.prototype.unique = function () {
  [...new Set(this)];
};
console.log(arr.unique);

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

//Coding challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const Car1 = new Car('BMW', 120);
const Car2 = new Car('Mercedes', 95);

console.log(Car1, Car2);

Car.prototype.accelerate = function () {
  //this.speed+=10;
  const speed1 = this.speed + 10;
  console.log(`This ${this.make} is going at ${speed1} km/h`);
};
Car.prototype.brake = function () {
  //this.speed-=5;
  const speed2 = this.speed - 5;
  console.log(`This ${this.make} is going at ${speed2} km/h`);
};
Car1.accelerate();
Car2.accelerate();
Car1.brake();
Car2.brake();

//?ES6 classes//
//syntethic sugar

//class expression

// const PersonCl= class{}

//class declaration

class PersonCl {
  constructor(firstName, birthYear) {}
}

const jessica = new PersonCL('Jessica');
