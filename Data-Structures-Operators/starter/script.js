'use strict';

// // // // // Data needed for a later exercise
// // // // const flights =
// // // //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
};

// // // //Calling the orderDelivery function//We can also give default values for the parameters
// // // restaurant.orderDelivery({
// // //   time: '22:30',
// // //   address: 'Via del SOle,21',
// // //   starterIndex: 2,
// // //   mainI,
// // // });
// // // // //Destructuring Arrays
// // // // const arr = [2, 3, 4];
// // // // //old way
// // // // const a = arr[0];
// // // // const b = arr[1];
// // // // const c = arr[2];
// // // // //new way-original array not affected
// // // // const [x, y, z] = arr;
// // // // console.log(x, y, z);
// // // //
// // // const [first, second] = restaurant.categories;
// // // console.log(first, second); //Italian Pizzeria
// // // // const[first, ,second]=restaurant.categories//leave blank space if we want to skip

// // // //switching variables
// // // let [main, , secondary] = restaurant.categories;
// // // [secondary, main] = [main, secondary]; //inverting
// // // console.log(main, secondary);

// // // //Function for ordering based on the index of starter and main menu
// // // restaurant.order(2, 0);
// // // console.log(restaurant.order(2, 0));

// // // //Recieve 2 return values from a function
// // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // console.log(starter, mainCourse);

// // // //Nested array destructuring

// // // const nested = [2, 4, [5, 6]];
// // // // const [i, , j] = nested;
// // // // console.log(i,j);

// // // const [i, , [j, k]] = nested;
// // // console.log(i, j, k);

// // // ///////////////////////////////////

// // // // // Adding Default values
// // // // // const [p, q, r] = [8, 9];
// // // // // console.log(p, q, r); //8,9,undefined
// // // // const [p = 1, q = 1, r = 1] = [8, 9];
// // // // console.log(p, q, r);//8,9,1
// // // /////////////////////////////

// // // //Destructuring Objects-we use the curly braces

// // // //specify the name of the propreties

// // // const { name, openingHours, categories } = restaurant;
// // // console.log(name, openingHours, categories);

// // // //If we want different names than the propreties names?
// // // const {
// // //   name: restaurantName,
// // //   openingHours: hours,
// // //   categories: tags,
// // // } = restaurant;
// // // console.log(restaurantName, hours, tags);

// // // //Set default values if they don't exist

// // // const { menu = [], starterMenu: starters = [] } = restaurant;
// // // console.log(menu, starters);

// // // //Mutating variables while destructuring objects

// // // // let a = 111;
// // // // let b = 999;
// // // // const obj = { a: 23, b: 7, c: 14 };
// // // // ({ a, b } = obj);//neew to wrap them in ()
// // // // console.log(a, b);
// // // // ////////////

// // // ////Nested destructuring for objects

// // // const {
// // //   fri: { open: o, close: c },
// // // } = openingHours;
// // // console.log(o, c, '@@@'); //nested destructuring and renaming even

// // // // ///////Spread Operators////expand the array unpack

// // // // const arr = [7, 8, 9];
// // // // const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //old way
// // // // console.log(badNewArr);

// // // // const newArr = [1, 2, ...arr]; //Spread operator ...
// // // // console.log(newArr);

// // // // console.log(...newArr); //elements of the array individually;//print 1,2,7,8,9

// // // // const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// // // // console.log(newMenu); //will print the new Menu

// // // // //Copy array
// // // // const mainMenuCopy = [...restaurant.mainMenu];

// // // // //Join 2 arrays
// // // // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // // // console.log(menu);

// // // // //Iterables : arrays, strings, maps, sets.NOT objects
// // // // //example with string
// // // // const str = 'Jonas';
// // // // const letters = [...str];
// // // // console.log(letters);
// // // // console.log(...str); //J O N A S

// // //Spread operator on functions

// // //call the orderPasta function
// // // const ingredients = [
// // //   prompt("Let's make pasta!Ingredient 1?"),
// // //   prompt('Ingredient 2?'),
// // //   prompt('Ingredient 3?'),
// // // ];
// // // console.log(ingredients);

// // // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //old way
// // // restaurant.orderPasta(...ingredients); //spread operator
// // // //Here's your delicious pasta with ....

// // //Also works on objects, even though object is not a iterable value(shallow copy)
// // const newRestaurant = { founded: 1996, ...restaurant, founder: 'Giuseppe' };
// // console.log(newRestaurant);

// // //creating a copy of the original object

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurantCopy);
// // console.log(restaurant);

// // /////////////////////////////////////////////////
// // //1)Destructuring
// // ///////Rest Operator/////packing the array//left side of =

// // const arr = [1, 2, 3, 4, 5];
// // const [a, b, ...others] = arr;
// // console.log(a, b, others);

// // //using on both side the ...
// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, otherFood);

// // //Objects Rest Operator (remaning elements will be collected in a new object)
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(sat, weekdays);

// // //2.Functions

// // //Rest parameters

// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };

// // add(2, 3);
// // add(5, 3, 7, 2);
// // add(8, 3, 4, 5, 4, 3, 2, 1);

// // //example
// // const x = [23, 5, 7];
// // add(...x); //taking all the numbers and spreading them

// // restaurant.orderPizza('mushrooms', 'onion', 'olives', 'tomato'); //result of the rest argument
// // restaurant.orderPizza('mushrooms'); // will get an empty array for otherIngredients

// // //Short Circuiting(&& and ||)
// // //----OR-----
// // //Use ANY data type, return any data type and they do short-circuiting

// // //will print the thruthy value
// // console.log(3 || 'Jonas');
// // console.log('' || 'Jonas'); //Jonas, cuz 0 is a falsy value
// // console.log(true || 0); //true, true is truthy
// // console.log(undefined || null); //undefined is falsy, null get's printed

// // console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello, the first thrythy value

// // //example
// // // restaurant.numGuests = 23;
// // // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10; // result 10 , first one is falsy(undefined) and will become the default value of 10
// // console.log(guests2);

// // //-----AND----&&
// // console.log(0 && 'Jonas'); //shortcircuits when the first value is falsy
// // console.log(7 && 'Jonas'); //when is thruthy the first value, it gets the last value thruthy "Jonas"
// // console.log('Hello' && 23 && null && 'Jonas'); //result will be null(tha falsy value)

// // //example

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'spinach');
// // } //check if the function exists and execute if exists

// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //same checking with && operator

// //Nullish Coallescing operator/ES2022

// // restaurant.numGuests = 0; //0 falsy value, even if we want to set the guste number to 0
// // const guests = restaurant.numGuests || 10;
// // console.log(guests);

// // //Nullish values: null and unefined (Not include 0 or empty string)-considers 0 and empty string as thuthy;
// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);

// /////////////////////////

// //Logical Assignment Operatos (ES2021);

// // //OR//
// // const rest1 = {
// //   name: 'Capri',
// //   // numGuests: 20,
// //   numGuests: 0,
// // };

// // const rest2 = {
// //   name: 'La Piazza',
// //   owner: 'Giovanni Rossi',
// // };

// // // rest1.numGuests = rest1.numGuests || 10;
// // // rest2.numGuests = rest2.numGuests || 10;
// // console.log(rest1);
// // console.log(rest2);

// // //OR assignment operator -same result as above
// // // rest1.numGuests ||= 10;
// // // rest2.numGuests ||= 10;

// // //nullish assignment operator (in case we have 0 as value)
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // //AND//

// // // rest1.owner = rest1.owner && 'Anonymus';
// // // rest2.owner = rest2.owner && 'Anonymus';

// // //AND assignment operator
// // rest1.owner &&= 'Anonymus';
// // rest2.owner &&= 'Anonymus';

// //Challenge//

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1.Creating new arrays for player1 and players2(destructuring)
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //Create variable goalkeeper and one with the remaining players

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //Create one array with all players
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //Create new array
// const players1Final = [...players1, 'Thiago', 'Couthino', 'Perisic'];

// //Nested Destructuring
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //Print Goal Function
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored!`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// //Print which theam is more likely to win
// //check if team1 is < team 2
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

//////////////The-FOR-OF-LOOP/////////

////Enhanced object literals///ES6

//If you have an object outside aof another object and you want to place it incide it is enough to place the name of the object.
//if you have methods in the object you can put simply the name and the parameters in the ()

///Optional chaining

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// //optional cahining// ?.

// console.log(restaurant.openingHours?.mon?.open); //undefined
// // console.log(restaurant.openingHours.mon.open); //error

//example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; //nullish coaliscent operator because || was taking 0 as falsy value
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Optional cahining on Methods

// //checkinf if a method exists
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //Optional chaining on arrays

// const users = [
//   {
//     name: 'Jonas',
//     email: 'hello@jonas.io',
//   },
// ];
// console.log(users[0]?.name ?? 'User array empty');

///////////////////////////////////////////////////////

///Looping over objects

//Proprety NAMES

// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.lenght} days:`;
// for (const day of properties) {
//   openStr += `${day}`;
// }
// console.log(openStr);

// //Property VALUES

// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);
// //[key,value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//Challenge
//1.Loop over the game.scored array and print each player name to the console, along with the goal number

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2.Calculating the average of odds
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.Print the team and the odd

for (const [team, odd] of Object.entries(game.odds));
{
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
  ////dc da eroare??
}
