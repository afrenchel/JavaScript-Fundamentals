'use strict';

// //?Constructor functions//
// //simulate classes
// //build an object using a function
// //constructor functions always start with a capital letter
// //does not work with arrow function
// // const Person = function (firstName, birthYear) {
// //   //Instance propreties
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;

// //!Never create a method inside of a constructor function
// // this.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };
// // };

// // const jonas = new Person('jonas', 1991); //we call the function with "new"
// // console.log(jonas);

// // //1.New emptty object is created
// // //2.Function is called, this = {}
// // //3.{} linked to prototype
// // //4.function automatically returns that {}

// // const matilda = new Person('matilda', 2017);
// // const jack = new Person('jack', 1975);

// // console.log(matilda, jack);

// // console.log(jonas instanceof Person); //check thaht jonas is istance of Person

// // //?Prototypes//
// // console.log(Person.prototype);

// //prototypal inheritance
// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(jonas)); //true
// console.log(Person.prototype.isPrototypeOf(matilda)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// //Setting proreties on the prototype

// Person.prototype.species = 'Home sapiens';
// console.log(jonas.species, matilda.species);

// //hasOwnProperty works due to prototype chain
// console.log(jonas.hasOwnProperty('species')); //false, it is not a direct proprety
// console.log(jonas.hasOwnProperty('firstName')); //true

// //Pr0totypal inheritance and the prototype chain

// //Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); //null

// console.log(Person.prototype.constructor);

// //Prototypal inheritance and the prototype chain on buil-in object(arrays)

// const arr = [83, 64, 83, 6, 5, 6, 9];
// console.log(arr.__proto__); //methods we already know( map,filter,reduce,slice,etc..)
// console.log(arr.__proto__ === Array.prototype); //true
// console.log(arr.__proto__.__proto__);

// //!Added a new method , all arrays will inherit this.Not a good idea , if you have a small project is ok.
// Array.prototype.unique = function () {
//   [...new Set(this)];
// };
// console.log(arr.unique);

// const h1 = document.querySelector('h1');
// console.dir(h1);

// console.dir(x => x + 1);

// //Coding challenge

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // const Car1 = new Car('BMW', 120);
// // const Car2 = new Car('Mercedes', 95);

// // console.log(Car1, Car2);

// // Car.prototype.accelerate = function () {
// //   //this.speed+=10;
// //   const speed1 = this.speed + 10;
// //   console.log(`This ${this.make} is going at ${speed1} km/h`);
// // };
// // Car.prototype.brake = function () {
// //   //this.speed-=5;
// //   const speed2 = this.speed - 5;
// //   console.log(`This ${this.make} is going at ${speed2} km/h`);
// // };
// // Car1.accelerate();
// // Car2.accelerate();
// // Car1.brake();
// // Car2.brake();

// //?ES6 classes//
// //syntethic sugar

// //class expression

// // const PersonCl= class{}

// //class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear); // this methods will be on the prototype of this objects
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // //Set a proprety thaht already exists use the _
//   // // set fullName(name) {
//   // //   console.log(name);
//   // //   if (name.includes(' ')) this._fullName = name;
//   // //   else alert(`${name} is not a full name!`);
//   // // }

//   // get fullName() {
//   //   return this._fullName;
//   // }

//   //?Static Methods//

//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// PersonCl.hey();
// const walter = new PersonCl('Walter', 1965);
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);

// jessica.calcAge();

// console.log(jessica.age); //reading the age as a proprety with the getter "get"

// //We can add also manually
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// //!1.Classes are not hoisted( can't used before they are declared)
// //!2.Class are first class citizens
// //!3.Classes are executed in "strict mode"

// //?Setter and getter properties (function that get and set a value)

// //With a object literal
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest); //we don't have to call the function, we get latest as a proprety
// account.latest = 50;
// console.log(account.movements);

// //?Static Methods//

// //?Use Object.create//

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   //Manual way initialization of the object
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// //Setting properties on the object
// steven.name = 'Steven';
// steven.birthYear = 2002;

// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// //Coding challenge 2
// //same challenge , change syntax by using es6 classes

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

//?1.Inheritance between classes with constructor functions
//Parent
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// //Child
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear); //setting manually the this keywords using the call

//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   this.course = course;
// };
// //!Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// //Challenge

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`This ${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed += 10;
//   console.log(`This ${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// //!Link the prototype

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

//?2.Inheritance between classes with ES6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear); // this methods will be on the prototype of this objects
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //Set a proprety thaht already exists use the _
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  //Static method
  static hey() {
    console.log('Hey there!');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);

    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }

  //override method from parent

  calcAge() {
    console.log(
      `My name is ${this._fullName} and I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//?3.Inheritance between classes with Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  //Manual way initialization of the object
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

//?More class examples and /!Implement Private Class Fields and Methods

//Public fields
//Private fields
//Public methods
//Private methods
//There is also the static version

class Account {
  //Public fields(instances)
  locale = navigator.language;

  //Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.currency = currency;
    this.#pin = pin;
    this.owner = owner;
    //Protected proprety
    // this._movements = []; //convention for adding privacy
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }
  //Public methods (public interface)

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // _approveLoan(val) {
  //   return true;
  // }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  //Private Methods (not avilable yet)

  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//Wrong to give acces outside of the class
// acc1._movements.push(250);
// acc1._movements.push(-140);
console.log(acc1.getMovements());

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
acc1.requestLoan(1000);

// console.log(acc1.#approveLoan(100))

//?Chaining Methods//
//use return this in the method in order for the chaining to work

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

//Challenge ES6 classes

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().accelerate().brake().accelerate().brake();

console.log(rivian.speedUS); //inherits also setter and getter from parent class
