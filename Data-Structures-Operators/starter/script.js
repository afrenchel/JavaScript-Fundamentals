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

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// //2.Calculating the average of odds
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// //3.Print the team and the odd

// for (const [team, odd] of Object.entries(game.odds));
// {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
//   ////dc da eroare??
// // }

// ////////////SETS///////
// //collection of unique values, can never have dupplicate values

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet); //will print unique values

// console.log(new Set('Jonas')); //J O N A S

// console.log(ordersSet.size);
// console.log(ordersSet.has('Bread')); //similar with includes
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlic Bread'); //add a item in the set
// ordersSet.delete('Risotto'); //remove a item in the set
// console.log(ordersSet);
// // ordersSet.clear(); to delete everything

// //we can loop over sets beacuse are iterables
// for (const order of ordersSet) console.log(order);

// //Example of using sets

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)]; //spread operator to create a new array based on the set
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// ////MAPS/////
// //we can have any type o key

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);
// //calling the set method return the updated map

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
//   .set('open', 12)
//   .set('closed', 23)
//   .set(true, 'We are open:D')
//   .set(false, 'We are closed:(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// //example of having booleans as map keys
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// console.log(rest.has('categories')); //checking
// rest.delete(2);
// console.log(rest);
// console.log(rest.size); //see the size
// // rest.clear();//delete

// rest.set([1, 2], 'Test');
// console.log(rest);

// console.log(rest.get([1, 2])); //undefined// to work we have to create an array with 1,2
// //DOM elements
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// //Maps Iteration//
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// //Convert object to map
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// //creating a prompt quiz
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// 3;
// console.log(question.get(question.get('c3orrect') === answer));
// 3;

// //Convert Map to array
// console.log([...question]);
// //Methods entries(),.keys(),values()

//Challenge

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.Array called events with the unique events
console.log(gameEvents.values()); //this is where the values are stored
const events = [...new Set(gameEvents.values())]; //create a set based on the values and use the spread... to create new array with this values
console.log(events);

//2.Delete the event of min 64
gameEvents.delete(64);

//3.Calculate the average of an event happening

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happend,on average, every ${time / gameEvents.size} minutes`
);
console.log(time);

//4.Looping

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} [HALF] ${min}: ${event}`);
}

////////WORKING WITH STRINGS//////

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //will print A, the position of the letter

console.log('B307'[0]);
//will print B
console.log(airline.length); //16 letters

//////////////Methods//////

console.log(airline.indexOf('r')); //will print 6, as the sixth letter from the string
console.log(airline.lastIndexOf('r')); //will print 10, as the last r letter from the string
console.log(airline.indexOf('Portugal')); //starts at position 8

console.log(airline.slice(4)); //will print Air Portugal. Slice start to extract at position 4,we get a sub-string
console.log(airline.slice(4, 7)); //will Print Air, stops extracting before reaching the end .

//If you dont know actually the string and you want first words and last one

console.log(airline.slice(0, airline.indexOf(' '))); //will print TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //will print Portugal

//define a begative begin argument
console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga

//Example//

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1); //extracts the last letter of the String
  if (s === 'B' || s === 'E') console.log('You got the middle seat😥');
  else console.log('You got lucky!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization of a passenger name

const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerLower, passengerCorrect);

//Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

//Solution
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //cleaning the white space and the enter
console.log(trimmedEmail);

//Best solution
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//Replacing

const priceGB = '288,97$';
const priceRON = priceGB.replace('$', 'RON').replace(',', '.');
console.log(priceRON);

const announcement = 'All passenger come to boarding door 23.Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate')); //replaceALL method

//Booleans

const airPlane = 'Airbus A320neo';
console.log(airPlane.includes('A320')); //returns true
console.log(airPlane.startsWith('Air'));

if (airPlane.startsWith('Airbus') && airPlane.endsWith('neo')) {
  console.log('Part of the Airbus New family!');
}

//Practice exercise

const checkBagagge = function (items) {
  const bagagge = items.toLowerCase(); //always transform to lower case the input from a user

  if (bagagge.includes('knife') || bagagge.includes('gun')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBagagge('I have a laptop, some food and a pocket Knife!');
checkBagagge('Socks and camera');
checkBagagge('Got some snacks and a gun for protection!');

///SPLIT//JOIN///

console.log('a+very+nice+string'.split('+')); //removes the + everything split up into a new array
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

/////Function to capitalize names////

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1)); //converting the first letter and add the last ones
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //same result
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas smith gabor');

//Padding

const message = 'Go to gate 23';
console.log(message.padStart(25, '+')); //string lenght and the charchter we want to add.
console.log(message.padEnd(35, '*'));

//EXAMPLE//
const maskCreditCard = function (number) {
  const str = number + ''; //converting the number to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(2345656756765));
console.log(maskCreditCard('5465756786583'));

//Repeat///

const message2 = 'Bad weather...All departures delayed...';
console.log(message2.repeat(5)); //repeating the string 5 times

//Example//

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInline(5);
planesInline(8);
planesInline(7);
