'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//?AJAX calls

//Old school way and nested callbacks

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText); //converting from JSON to object
//     console.log(data);
//     //Render country 1
//     renderCountry(data);

//     //Get neighbour country

//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// // };

// // // getCountryAndNeighbour('portugal');
// // getCountryAndNeighbour('usa');

// //Promises and THE Fetch API (modern way)

// // const request = new XMLHttpRequest();
// // request.open('GET', `https://restcountries.com/v2/name/${country}`);
// // request.send();

// // const request = fetch(`https://restcountries.com/v2/name/portugal`);
// // console.log(request);

// //The Lifecycle of a promise
// //1.Pending
// //2.Settled (fulfilled and rejected), only settled once

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json(); //available on all the response objects to read the data
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// //simplify the code

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then(response => response.json())
// //     .then(data => renderCountry(data[0]));
// // };

// // getCountryData('portugal');

// //Chaining promises

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };
//helper function
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

// // // //Code example
// // const getCountryData = function (country) {
// //   //Country 1
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then(response => {
// //       console.log(response);

// //       if (!response.ok) {
// //         throw new Error(`Country not found!" ${response.status}`);
// //       }
// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       //   const neighbour = data[0].borders[0];
// //       const neighbour = 'dsfdfs';
// //       if (!neighbour) return;
// //       //Country 2
// //       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// //     })
// //     .then(response => {
// //       console.log(response);

// //       if (!response.ok) {
// //         throw new Error(`Country not found!" ${response.status}`);
// //       }
// //       return response.json();
// //     })
// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err}🥵🥵🥵`);
// //       renderError(`Something went wrong 🥵🥵🥵! ${err.message}`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // //Handling rejected promises/errors (internet offline)

// // btn.addEventListener('click', function () {
// //   getCountryData('portugal');
// // });

// //Code example refactored

// // const getCountryData = function (country) {
// //   // Country 1
// //   getJSON(
// //     `https://restcountries.eu/rest/v2/name/${country}`,
// //     'Country not found'
// //   )
// //     .then(data => {
// //       console.log(data);
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders[0];
// //       if (!neighbour) throw new Error('No neighbour found!');

// //       // Country 2
// //       return getJSON(
// //         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
// //         'Country not found'
// //       );
// //     })
// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err} 💥💥💥`);
// //       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };
// //Handling rejected promises/errors (internet offline)

// // btn.addEventListener('click', function () {
// //   console.log('Received');
// //   getCountryData('portugal');
// // });
// //add a catch method at the end of the chain
// //finally method is called always even if promise is settled or rejected

// // getCountryData('dsdsfsds'); //error 404
// // getCountryData('portugal');

// // testing push commits

// //Challenge

// //Geocoding
// // const whereAmI = function (lat, lng) {
// //   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// //     .then(res => {
// //       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// //       return res.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       console.log(`You are in ${data.city}, ${data.country}`);
// //       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
// //     })
// //     .then(res => {
// //       if (!res.ok) throw new Error(`Country not found (${res.status})`);
// //       return res.json();
// //     })
// //     .then(data => renderCountry(data[0]))
// //     .catch(err => console.error(`${err.message} 💥`));
// // };
// // whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// //The venet loop in practice
// console.log('Test start'); //1
// setTimeout(() => console.log('o sec timer'), 0); //3
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //2-microtask have priority
// //*simulate a long running task, timer will take more than 0 sec to appear;
// // Promise.resolve('Resolved promise 2').then(res => {
// //   for (let i = 0; i < 1000000; i++) console.log(res);
// // });
// console.log('Test end'); //1

// //Building a simple promise

// // const lotteryPromise = new Promise(function (resolve, reject) {
// //   console.log('Lottery draw is starting!');
// //   setTimeout(function () {
// //     if (Math.random() >= 0.5) {
// //       resolve('You WIN 💲'); //mark this promise as a resolved promise/fulfilled promise
// //     } else {
// //       reject(new Error('You lost your money!💩'));
// //     }
// //   }, 2000);
// // });
// // //consuming the promise
// // lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //Promisifying setTimeout

// // const wait = function (seconds) {
// //   return new Promise(function (resolve) {
// //     setTimeout(resolve, seconds * 1000);
// //   });
// // };

// // wait(2)
// //   .then(() => {
// //     console.log('I waited for 2 seconds');
// //     return wait(1);
// //   })
// //   .then(() => console.log('I waited for 1 second'));

// // //Resolving/rejecting promises
// // Promise.resolve('abc').then(x => console.log(x));
// // Promise.reject('Problem!').catch(x => console.error(x));

// // //Promisifying Geocode Challenge
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // getPosition().then(pos => console.log(pos));
// // const whereAmI = function () {
// //   getPosition()
// //     .then(pos => {
// //       const { latitude: lat, longitude: lng } = pos.coords;
// //       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// //     })
// //     .then(res => {
// //       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// //       return res.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       console.log(`You are in ${data.city}, ${data.country}`);
// //       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
// //     })
// //     .then(res => {
// //       if (!res.ok) throw new Error(`Country not found (${res.status})`);
// //       return res.json();
// //     })
// //     .then(data => renderCountry(data[0]))
// //     .catch(err => console.error(`${err.message} 💥`));
// // };
// // btn.addEventListener('click', whereAmI);

// //Consuming promises with ASYNC/AWAIT

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );

//     // BUG in video:
//     // if (!resGeo.ok) throw new Error('Problem getting country');

//     // FIX:
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//   }
// };
// btn.addEventListener('click', whereAmI);
// whereAmI('portugal');
// whereAmI();
// whereAmI();
// console.log('FIRST');

// //Try and catch

// // try {
// //   let y = 1;
// //   const x = 2;
// //   x = 3;
// // } catch (err) {
// //   alert(err.message);
// // }

// //When we return from async/await we have to read the data, can use then() method.

// //IFEE function async await /return the value-cath the error

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// });

// Running Promises in Parallel
//Promise.all
//* one rejected promise is enough for all to reject

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');

//Other promise combinators

//Promise.race

//shortcircuits whwnever a promise get fullfilled or rejected
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);

  console.log(res[0]);
})();

//reject if too much time takes to make the fetch (bad interent)

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promise.allSettled[ES2020]
//*returns an array of  all promises

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Promise.any [2021]
//returns the first fulfilled promise, the result always gonna be a succesful promise
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Last challenge
// PART 1
// Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
// Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'paralell' class to all the images (it has some CSS styles).
// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;

//PART 1
const loadNPause = async function () {
  try {
    //Load img 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    //Load img 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

//PART 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
