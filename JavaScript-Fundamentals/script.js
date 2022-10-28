/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("23");

let firstName = "Alina";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//First Assignment//
let country = "Romania";
let continent = "Europe";
let population = "22 million";

console.log(country);
console.log(continent);
console.log(population); */

//Data types

/* let javaScriptisFun = true;

//console will show the type for the value
console.log(javaScriptisFun);

console.log(typeof true);
console.log(typeof javaScriptisFun);
console.log(typeof 23);
console.log(typeof "Jonas");

//dinamic typing- typeof operator
javaScriptisFun = "YES!";
console.log(typeof javaScriptisFun);
//undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//BUG in Java Script-it shows that is a object
console.log(typeof null); */

//let age = 30;
//age = 31;
//const is for constant values thaht can't change -immutable variables
//const birthYear = 1991;
//birthYear = 1990;
// const job; we are not allowed to give empty value

//Var the old way to declare variables befor ES6
//var job = "programmer";
//job = "teacher";
//Always declare variables!

//Operators-matematical
/*const now = 2037;
const ageJonas = now - 1991;
const ageAlina = now - 2018;
console.log(ageJonas, ageAlina);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); //concatenate

//Assignment operators = sign

let x = 10 + 5; //15
x += 10; // x= x=10= 25;
x *= 4; //x= x*4; =100;
x++; // x= x+1;
x--; // x=x-1;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageAlina); // > < >= <=
console.log(ageAlina >= 18); //is Alina 18 or older? true

const isFullAge = ageAlina >= 18;
console.log(now - 1991 > now - 2018); */

//Operator precedence

/*const now = 2037;
const ageJonas = now - 1991;
const ageAlina = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5); // executed left to right

let x, y;
x = y = 25 - 10 - 5; // assignment has lower precedence and is right to left// x= y=10, x=10;
console.log(x, y);
const averageAge = (ageJonas + ageAlina) / 2; //grouping has the biggest precedence- what is in the ()
console.log(ageJonas, ageAlina, averageAge); */

//First code challenge
/*
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;
const bmiMark = weightMark / heightMark ** 2;
console.log(bmiMark);
const bmiJohn = weightJohn / heightJohn ** 2;
console.log(bmiJohn); // console.log(bmiMark, bmiJohn)
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI); */

//Strings and template literals
/* 
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " " +
  "years old " +
  job +
  "!";
//console.log(jonas);

//template literal//
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);

//old way
console.log("String with \n\
multiple \n\
lines");

//new way (ES6)
console.log(`String
multiple
log`); */

//Taking decisions if/else statemens //control structure

//const age = 15;

//const isOldEnough = age >= 18;
//if (isOldEnough) {
//  console.log("Sarah can start  driving license 🚗");
// }

//we do the operation in the if()
/*
if (age >= 18) {
  console.log("Sarah can start  driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

const birthYear = 2012;

let century; //declare the century value outside of the block

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); */

// 2 Coding challenge
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI(${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI(${bmiMark})`);
}
*/

//Type conversion and coercion
//type conversion done manually

/*
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);



//type coercion done automatically
console.log("I am" + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

//exercise
let n = "1" + 1;
n = n - 1;
console.log(n);

//In practice JS makes type coercion we don't do this manually
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true-thruthy
console.log(Boolean({})); // true-thruthy
console.log(Boolean("")); //false-falsy

//logical context example

/* 
const money = 0;

if (money) {
  console.log("Don't spend it all;)");
} else {
  console.log("You should get a job");
}

let height;

if (height) {
  console.log("Yey! Height is defined");
} else {
  console.log("Height is undefined");
}

let height = 2;

if (height) {
  console.log("Yey! Height is defined");
} else {
  console.log("Height is undefined");
}

//if we define height=0 ; we still get the answer that height is undefined beacuse 0 is a falsy value, but we actually defined a value. Later on how to solve this!
*/

//Equality operators === ==
//= is for assignment
//=== is for comparison if something is actually equal with sth else -strict- no type coercion
//== loose , does type coercion -we can compare a string to a number to see if they are equal
/*
const age = "18";
if (age === 18) {
  console.log("You've just become an adult:d");
}

const age = 18;
if (age == 18) {
  console.log("You've just become an adult:d");
}

//"18"==18


const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
  // "23" == 23
  console.log("Cool! 23 is an amazing number!");
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 23 === 23
  console.log("Cool! 23 is an amazing number!");
}
else if( favourite === 7) {
  console.log("7 is also a cool number!");
}
else {
  console.log("Number is not 23 or 7");

  !== strict (Is different?)
  != loose (Is different?) */

//Boolean logic AND OR NOT
//AND &&
//OR ||
//

//Coding challenge 3

// //1.
// const avgScoreDolphins = (96 + 108 + 89) / 3; // result 97.66
// const avgScoreKoalas = (88 + 91 + 110) / 3; // 96.33
// console.log(avgScoreDolphins, avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas) {
//   console.log("Dolphin's win the trophy!");
// } else if (avgScoreKoalas > avgScoreDolphins) {
//   console.log("Koala's win the trophy!");
// } else {
//   console.log("It's a draw!");
// }
// //Result: Dolphin's win the trophy!

// //2 Bonus
// const avgScoreDolphins = (97 + 112 + 101) / 3; // 103.33
// const avgScoreKoalas = (109 + 95 + 123) / 3; //109
// console.log(avgScoreDolphins, avgScoreKoalas);

// if (avgScoreDolphins >= 100 && avgScoreDolphins > avgScoreKoalas) {
//   console.log("Dolphin's win the trophy!");
// } else if (avgScoreKoalas >= 100 && avgScoreKoalas > avgScoreDolphins) {
//   console.log("Koala's win the trophy!");
// } else {
//   console.log("It's a draw");
// }
// //Result: Koala's win the trophy!

// //3 Bonus
// const avgScoreDolphins = (97 + 112 + 101) / 3; // 103.33
// const avgScoreKoalas = (109 + 95 + 106) / 3; //103.33
// console.log(avgScoreDolphins, avgScoreKoalas);

// if (
//   (avgScoreDolphins,
//   avgScoreKoalas >= 100 && avgScoreDolphins === avgScoreKoalas)
// ) {
//   console.log("Both win the trophy!");
// }
// //Result : Both win the trophy!

//The switch statement

// const day = "sunday";

// switch (day) {
//   case "monday": //day ===monday
//     console.log("Plan course structure");
//     console.log("Go to coding meeting");
//     break;

//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;

//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;

//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;

//   default:
//     console.log("Not a valid day");
// }

// //If variant of the Switch statement
// let day = "friday";
// if (day === "monday") {
//   console.log("Plan course structure");
// } else if (day === "tuesday") {
//   console.log("Go to meeting");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Record videos");
// } else if (day === "friday") {
//   console.log("Upload videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Plan enjoy the weekend");
// } else {
//   console.log("Not a valid day");
// }

//The conditional operator/turnary operator

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// //create a value// short code instead of if statement
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// //Using the conditional in a template literal
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//Coding challenge 4

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value was ${
//     bill + tip
//   }`
// );

//FUNDAMENTALS part 2
"use strict";

//FUNCTIONS

// function logger() {
//   console.log("My name is Jonas");
// }

// logger(); //running/callin/invoking the functio
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// fruitProcessor(5, 0);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //Function declaration
// function calcAge1(birthYear) {
//   //const age = 2037 - birthYear;
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//ARROW FUNCTION
// //simpler
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// //complex arrow function
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991));
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

//FUnctions calling functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// } //machine that cuts the fruits

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces}  pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//REVIEW functions

// ARRAYS

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";
// //create and array
// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// const y = new Array(1991, 1992, 1993); //another way to create

// //elementele din array sunt numerotate incepand cu 0
// console.log(friends[0]); //print first element
// console.log(friends[2]); //print last element

// console.log(friends.length); //how many elements we have?
// console.log(friends[friends.length - 1]); //print last element

// friends[2] = "Jay"; //replace last element from Peter to Jay

// // friends = ["Bob", "John"] will get error, we can't change an entire array
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// //Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// //we use the calcAge function for each element of the array we can't put calcAge(years)

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// //we can store the results into a new array
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages); //print the result of the new array with ages base on birthYear

//Basic arrawy operations

// //PUSH-add element at the end of the array
// const friends = ["Michael", "Steven", "Peter"];
// const newLenght = friends.push("Jay");
// friends.push("Jay");
// console.log(friends);
// console.log(newLenght); //4

// //UNSHIFT-add element at the beginning of the array
// friends.unshift("John");
// console.log(friends);

// //Remove elements:

// //POP- remove last element
// friends.pop(); //we removed Jay
// console.log(friends);
// const popped = friends.pop();
// console.log(popped); //returns what was removed

// //SHIFT-remove first element

// friends.shift();
// console.log(friends);

// //Which position has an element on the array?

// //indexOF
// console.log(friends.indexOf("Steven")); //pozition of the element

// //includes- uses strict equality no type coercion
// console.log(friends.includes("Steven")); // if this element is present in this array
// console.log(friends.includes("Bob")); //false

// //we can use this methods in if statements
// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

// //Chalenge 2-Arrays

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// // //arrow
// // const calcTip= bill=> bill>=50 $$ bill<=300 ?
// // bill*0.15 : bill*0.2;

// const bills = [125, 555, 44]; //create array of bills
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; //create new array with the tips calculated with the help of the calcTip functio
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// Fizzbuzz

// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0) {
//     console.log("FIZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FIZZBUZZ");
//   } else {
//     console.log(i);
//   }
// }

//OBJECTS

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends."
// );
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request!What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends."
//   );
// }

//Challenge
//Jonas has 3 friends, and his best friend is called Michael.
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );
//OBJECT METHODS
// //an object can have different kind of values
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991, //number value
//   job: "teacher", //string value
//   friends: ["Michael", "Peter", "Steven"], //array value
//   hasDriverLicense: true, //boolean value
//   //   calcAge: function (birthYear) {
//   //     return 2037 - birthYear;
//   }, //function value
// };
// calcAge: function () {
//   return 2007 - this.birthYear; //"this" object calling the method
// },
//creating a new proprety of the object using THIS
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} -year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };
// console.log(jonas.calcAge());
// console.log(jonas.age);

// console.log(jonas.getSummary());

// //print in 2 methods DOT vs Brackets
// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

//Challenge
//"Jonas is a 46-year old teacher and he has a driver's license."

//Challenge 3 OBJECTS

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// console.log(mark.bmi);

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// john.calcBMI();
// mark.calcBMI();
// console.log(mark.bmi);
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`
//   );
// }

//LOOPS

//for loop keeps running while condition is TRUE

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting wheights repetition ${rep}`);
// }

//Wanted to log a string 10 Times
//we use a for loop(intialized the counter at 1,after each iteration we increase the counter by one ++.the loop keeps running  while the condition <=10 is true .)
//produces 10 strings

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = []; //create empty array

// for (let i = 0; i < jonasArray.length; i++) {
//   //Reading from jonas array
//   console.log(jonasArray[i], typeof [i]);
//   //Filling type array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonasArray[i]);
// }
// console.log(types);

// //Calculate the ages and store them into new arrawy-exercise

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log("---Only strings---");
// //continue(exist the current iteration of the loop)
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue; //if the typeof jonas[1] is not a string than continue with the iteration

//   console.log(jonasArray[i], typeof [i]); //code execution stops
// }

// console.log("---Break with numbers---");
// //break the loop if a number is found

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break; //after the first number is found nothing else is printed
//   console.log(jonasArray[i], typeof [i]); //not printed anymore
// }

// //Looping Backwards
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// //0,1,...4
// //4,3,...0 (backwards)

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// //Loops in loops

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`Starting exercise ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}Lifting wwight repetition ${rep}😺`);
//   }
// }

//The WHILE LOOP

//with for

// for (let rep = 1; rep < +10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }
// //with while

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

//ROLL a dice while the roll dice is different from six.Stop at six.

//different random number while we keep refreshing the page

//Challenge-for and while loops

// //creating the function for calculationg tip
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// //creating the arrays
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]); //calling the function for tip
//   tips.push(tip); //adding tip to tips array
//   totals.push(tip + bills[i]); //adding totals to totals array
// }
// console.log(bills, tips, totals);

// //Bonus challenge-calculating the sum of the array and the average of the array;

// const calcAverage = function (array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i]; // sum+= array[i]
//   }
//   return sum / array.length;
// };
// console.log(calcAverage([2, 3, 6]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

//Solving a problem using resources: Google, MDN, Stackoverflow
//Given an array of temperatures of one day, calculate the temperature amplitude.Keep in mind thaht sometime there might be a sensor error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1.Step: What is temp amplitude?
//Difference between the highest temp and lowest temp?
//What is a sensor error and what to do when the error occurs?
//Breaking up into sub-problems
//*How to ignore error?
//Find max value
//Find min value
//Subtract min from max(amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   //looping thorugh the array
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue; //ignorring the error
//     if (curTemp > max) max = curTemp;

//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// calcTempAmplitude([3, 7, 4, 6, 2]);
// const amplitude = calcTempAmplitude(temperatures); //storing in a variable
// console.log(amplitude); //result 23

//Problem 2
//Function should now recieve 2 arrays of temperature values
//1)With 2 arrays we need to implement the same function twice?NO,just merge 2 arrays.
//-How to merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   //merge 2 arrays
//   const temps = t1.concat(t2);
//   console.log(temps);

//   //looping thorugh the array
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue; //ignorring the error
//     if (curTemp > max) max = curTemp;

//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// calcTempAmplitudeNew([3, 7, 4, 6, 2]);
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 3], [9, 0, 5]); //storing in a variable
// console.log(amplitudeNew); //result 23

//Debugging(fix erros)
//We also have console.warn console.error console.table

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees celsius")), //always returns a string, convert to number(FIX the bug)
//   };
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// //A. Identify the bug/Find the bug/Fix the bug
// console.log(measureKelvin());

//Coding challenge:
//Understand the problem:

//Array transformed to string separated by ...
//What is the X days?(current index of the array+1);

//Break into sub problems:
//Transform this array into a string
//Transformeach element into a string with C
//String need to contain day (index+1)
//Add... between elements and start and end of string;

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// // //hardcode for few elements
// // console.log(`...${data1[0]}C...${data1[1]}`)

// //USE a function

// const printForecast = function (arr) {
//   let str = "";

//   for (let i = 0; i < arr.length; i++) {
//     //Transform this array into a string
//     str = str + `${arr[i]} C in ${i + 1} days ... `;
//   }
//   console.log("..." + str);
// };
// console.log(printForecast(data2));
