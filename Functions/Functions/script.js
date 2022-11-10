'use strict';
//Default paramteres//

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   //ES5 way of setting default parameters
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);

//default values can contain any expression and we can calculate based on other parmaters specified before
//we can't skip a parameter and don't specify one of them, we can set it to undefined and then will take the value(skip a default parmeter)

///////////////////////////////////////////////////////////////////////////////////////////

//Passing arguments into functions//

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 243543654667,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 243543654667) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);

// console.log(flight);
// console.log(jonas);

// // //jonas object changed but the flight remained the same
// // //Is the same as doing
// // const flightNum= flight;
// // const passenger= jonas;
// // //review again difference between primitves and reference objects;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//Java script it has only passing by value!!!!

///////////////////////////////////////////////////////////////

//First class functions//vs.Higher Order Functions
/* JS treats functions as first-class citizens
This means functions are simply values
Functions are just another "type" of object */

//High-Order functions recieve another function as argument and returns a new function or both;
//high-order functions --->call back functions

//High-Order functions

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   console.log(first, others);

//   return [first.toUpperCase(), ...others].join(' ');
// };

// //High order function

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);

//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('javaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('🖐');
// };

// document.body.addEventListener('click', high5); //high5 is a callback function

// ['Jonas', 'Martha', 'Adam'].forEach(high5); //for each of the elements this callback functioned will be called

// //Makes easy to split the code and callback functions allows to create abstraction

//?Functions returning functions//
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

//**Challenge- transform into arrow function//

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');

//?Call and apply method/////////////////////////////////////////////////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; //take this function value and store it to a new variable

//Does not work
// book(23, 'Sarah Smith');

//!.call()method on function//set the this keyword////

book.call(eurowings, 23, 'Sarah Smith'); //call method which will call the book function with the this keywords set by us.
console.log(eurowings);

book.call(lufthansa, '239', 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'John McDonald');
console.log(swiss);

//!Apply() method/////needs an array

const flightData = [567, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); //using the call method and spreding out the arguments from an array

//!Bind method//returns a new function where the this keywords is applied

const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEw(23, 'Steven Williams');

//Example

const bookEW23 = book.bind(eurowings, 23); //we preset the flight number
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//!With Event Listeners-using the BIND()
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//!Partial application(bind())

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //sets the rate value at 23%

console.log(addVAT(100));

//Challenge//
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

//?Closure//

// var passed = 3;
// const addTo = function () {
//   var inner = 2;
//   return inner + passed;
// };
// console.log(addTo);

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();

// let passengerCount = 20; //!closure has priority over scope chain//

// booker();

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
// f();
