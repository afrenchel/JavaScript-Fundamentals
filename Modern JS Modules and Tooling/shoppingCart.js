//Exporting module
console.log('Exporting module');

//Blocking code (top-level await)

// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');

// //get the second log only after the fetch is finished and after will come the next code
// console.log('Finish fetching users');

////////////////////////////////////////////////////////////

//scoped to the current module
const shippingCost = 10;
export const cart = [];

//!Named export//
//can change name : totalQuantity as tQ

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} and ${quantity}added to cart`);
};

const totalPrice = 23;
const totalQuantity = 6;

export { totalPrice, totalQuantity };

//!Default exports- when we want to export 1 thing/module

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} and ${quantity}added to cart`);
}
