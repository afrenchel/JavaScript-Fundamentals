'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructure the array

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const ac = arr[3];

// const [x, y, z] = arr; // destructure the array
// console.log(x, y, z); //will print 2,3,4
// console.log(arr); //original array was note affected

// //switch
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// //Switching variables by decontructing them
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //recieve 2 return values from a function
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0); //arrays with Garlic Bread, Pizza
// console.log(starter, mainCourse); //Garlic Bread Pizza

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// //destructure nested arrays
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values for
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// //Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags); //renaming the deconstructed

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters); //we put as default value as a empty array and renamed

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); //wrap in () and we cand mutate variables, a and b become 23 and 7
// console.log(a, b);

// //nested objects

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); //11 23

///////Spread Operators////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //old way
console.log(badNewArr);

const newArr = [1, 2, ...arr]; //Spread operator ...
console.log(newArr);

console.log(...newArr); //elements of the array individually;//print 1,2,7,8,9

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); //will print the new Menu
