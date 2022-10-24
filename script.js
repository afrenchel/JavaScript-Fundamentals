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
