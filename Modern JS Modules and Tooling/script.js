//?Modules//Organzing modern JS Code

//*Reusable piece of code that encapsulates implementations details;
//*Usually a standalone File, but it is not mandatory;
//*import and export modules
//!Imports are not copy of the exports are live connection and point to the same place in memory!

//!Importing module

//Top level code
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// ('./shoppingCart.js');
console.log('Importing module');

//!Import all

import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

//Default export (exported only the add to cart functioned and named it "add")
//Not a good idea to mix default and named export
//live connection proof, don't mix it though
import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 4);
add('apples', 5);

console.log(cart);

//*ES 2022 , await keyword used only in modules outside of functions (Top level- await)

// console.log('Start fetching');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// //! top-level await is blocking the entire execution of the model, "Something" will not appear untile the fetch happens

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost); //this is a promise not actual data itself

//Solution- not very clean
lastPost.then(last => console.log(last));

//Solution with top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);

//!Module pattern and how it worked before ES6 modules

// //IFEE
// //Closures
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${product} and ${quantity} added to cart and shipping cost is ${shippingCost}`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${product} and ${quantity}added to cart`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 3);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

//*Common JS Modules

// //Export Node JS
// export.addToCart= function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${product} and ${quantity} added to cart and shipping cost is ${shippingCost}`
//     );
//   };

//   //Import Node JS

//   const {addTocart}= require(./shoppingCart.js");

//!Basics of command line
//dir = contents of the current folder
// cd= move between folder cd ..
// cd name of the folder
// cd../.. move back 2 lveles
//clear = clear console
//mkdir TEST= create a new folder
//touch index.html
//del index.html,
//mv (name) ../

//Introduction to NMP
// npm install again if you delete modules

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

console.log(stateDeepClone);

state.user.loggedIn = false;
console.log(stateClone);

//Building with Parcel and NPM Scripts

//npm install parcel
//npx parcel indexed.html
//if you have errors you can use sudo npx parcel index.html
//parcel created dist folder

//Change automatically , maintaing state
//create scripts in package json folder
// npm run start
//npm run build

//nmp i parcel -g , installing globally
if (module.hot) {
  module.hot.accept();
}

//import a library to polyfill

// import 'core-js/stable';
// import 'core-js/stable/array';

//Babel

//npm instal regenartor-runtime
//Polifilling async functions

// import "regenerator-runtime/runtime";
