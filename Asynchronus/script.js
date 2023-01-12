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
  //   countriesContainer.style.opacity = 1;
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
// };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

//Promises and THE Fetch API (modern way)

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

//The Lifecycle of a promise
//1.Pending
//2.Settled (fulfilled and rejected), only settled once

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json(); //available on all the response objects to read the data
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//simplify the code

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');

//Chaining promises

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};
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

// //Code example
// const getCountryData = function (country) {
//     //Country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//       .then(response => {
//         console.log(response);

//         if (!response.ok) {
//           throw new Error(`Country not found!" ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         renderCountry(data[0]);
//         //   const neighbour = data[0].borders[0];
//         const neighbour = 'dsfdfs';
//         if (!neighbour) return;
//         //Country 2
//         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//       })
//       .then(response => {
//         console.log(response);

//         if (!response.ok) {
//           throw new Error(`Country not found!" ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => renderCountry(data, 'neighbour'))
//       .catch(err => {
//         console.error(`${err}🥵🥵🥵`);
//         renderError(`Something went wrong 🥵🥵🥵! ${err.message}`);
//       })
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       });
//   };

//   //Handling rejected promises/errors (internet offline)

//   btn.addEventListener('click', function () {
//     getCountryData('portugal');
//   });

//Code example refactored

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
//Handling rejected promises/errors (internet offline)

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
//add a catch method at the end of the chain
//finally method is called always even if promise is settled or rejected

// getCountryData('dsdsfsds'); //error 404

// testing push commits
