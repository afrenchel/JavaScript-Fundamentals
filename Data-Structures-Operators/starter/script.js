'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//Calling the orderDelivery function//We can also give default values for the parameters
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del SOle,21',
  mainIndex: 2,
  starterIndex: 2,
});
// //Destructuring Arrays
// const arr = [2, 3, 4];
// //old way
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// //new way-original array not affected
// const [x, y, z] = arr;
// console.log(x, y, z);
//
const [first, second] = restaurant.categories;
console.log(first, second); //Italian Pizzeria
// const[first, ,second]=restaurant.categories//leave blank space if we want to skip

//switching variables
let [main, , secondary] = restaurant.categories;
[secondary, main] = [main, secondary]; //inverting
console.log(main, secondary);

//Function for ordering based on the index of starter and main menu
restaurant.order(2, 0);
console.log(restaurant.order(2, 0));

//Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested array destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i,j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

///////////////////////////////////

// // Adding Default values
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r); //8,9,undefined
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);//8,9,1
/////////////////////////////

//Destructuring Objects-we use the curly braces

//specify the name of the propreties

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//If we want different names than the propreties names?
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Set default values if they don't exist

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables while destructuring objects

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);//neew to wrap them in ()
// console.log(a, b);
// ////////////

////Nested destructuring for objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); //nested destructuring and renaming even

// ///////Spread Operators////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //old way
// console.log(badNewArr);

// const newArr = [1, 2, ...arr]; //Spread operator ...
// console.log(newArr);

// console.log(...newArr); //elements of the array individually;//print 1,2,7,8,9

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu); //will print the new Menu

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables : arrays, strings, maps, sets.NOT objects
// //example with string
// const str = 'Jonas';
// const letters = [...str];
// console.log(letters);
// console.log(...str); //J O N A S
