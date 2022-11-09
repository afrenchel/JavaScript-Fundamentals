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

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split('');

  return [first.toUpperCase(), ...others].join('');
};

//High order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);

  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5); //high5 is a callback function

['Jonas', 'Martha', 'Adam'].forEach(high5); //for each of the elements this callback functioned will be called

//Makes easy to split the code and callback functions allows to create abstraction
