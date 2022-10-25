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
