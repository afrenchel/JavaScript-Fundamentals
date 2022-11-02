'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   console.log(firstName); //JS did a variable lookup and find the variable in the global scope "firstName"

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //   const firstName="Steven";//it will use Steven beacuse it is in the current scope

//       //Reassigning outer scope's variable
//       output = 'New Output';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     // //console.log(str); will not work available only in the block in which was created(const,let)
//     // console.log(millenial); // var can be found outside the block
//     // add(2, 3);//not avialable out of the scope-if we remove strict mode it will work
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

//HOISTING and TDZ

//Hoisting with variables

// console.log(me); //hoisted but the result is undefined
// console.log(job); //cannot acces before intialziation
// console.log(birthYear); //cannot acces before intialziation

// var me = 'Jonas';
// let job = 'teacher';
// const birthYear = 1991;

//Hoisting with functions

// console.log(addDecl(2, 3)); // able to call function declaration before it was defined in the code-result 5

// console.log(addExpr(2, 3)); //cannot acces before intialziation- is created with const
// console.log(addArrow(2, 3)); //cannot acces before intialziation- is created with const
// //! If we declare with var we'll get the error that they are not a function

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //Example
// //Better to use const and let , and declare your variables at the top of your scope, and always declare your functions and after that use them .

// // if (!numProducts) deleteShoppingCart();
// // var numProducts = 10; //functions gets executed , undefined is a falsy value

// // function deleteShoppingCart() {
// //   console.log('All products deleted');
// // }
// // //Variables decalred with var will created a proprety on the window object in the console
// // var x = 1;//true
// // let y = 2;//false
// // const z = 3;//false

// //THIS Keyword

// console.log(this); // window

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear); //46
//   console.log(this); // undefined
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear); //45
//   console.log(this); // window= pinting to this keywords from to global scope
// };

// calcAgeArrow(1992);

// //Method

// //this becomes jonas
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge(); //jopnas is calling the method

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge; //matilda becomes the object
// matilda.calcAge();

// const f = jonas.calcAge;
// f(); //undefined, there is no object attached to the function

//Regular Functions vs Arrow Functions -THIS keyword
// var firstName = 'Matilda';// mistake, not using var
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet(); //result "Hey, undifend" // declaring with var = Hey Matilda
// console.log(this.firstName); //undefined
// //!Use regular functions (which have their own this keyword) not arrow functions

//Regular Functions vs. Arrow Functions

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2 -changing into arrow function
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// ///////////////////////////////////////

//Primitives vs Objects

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friends:', friend); //will print Jonas age 27
// console.log('Me', me); // will print Jonas age 27

/////Example/////

//everything works as expected , each primitive value is saved in it's own piece of memory in the stack
let lastName = 'Williams';
let oldlastName = lastName;
lastName = 'Davis';
console.log(lastName, oldlastName);
//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; //not createad a new object in the heap, simply another variable which holds the reference to the original object
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica); //get the Davis name in both situations

//marriedJesica= {};//not work we have a constant , if it was a let it will work

//Copying objects-Solution using the object.assign-a new object created in the heap-only creates a shallow copy-copy only the first level
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2); //Williams
console.log('After marriage:', jessicaCopy); //Davis
//manipulating a object which is in a object
jessicaCopy.family.push(['Mary']);
jessicaCopy.family.push(['John']);
//now both the objects have a proprety called family with 4 numbers
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
//To resolve the issues is to create a deep clone , using library, we will do that in a later section
