'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////!Lecture////

//?Ways on selecting elements//
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //HTML Collection update automatically

document.getElementsByClassName('btn');

//?Creating and inserting elements//

//.insertAdjacentHTML//

const message = document.createElement('div'); //create a DOM element and stores the element in message constant
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn--close-cookie"> Got it! </button>';

header.prepend(message); //adds the element as the first child
// header.append(message); //adds the elements as the last child
header.append(message.cloneNode(true)); // we get 2 cookie message, we clone the DOM elemetn we have just created

// header.before(message);
// header.after(message);

//?Delete elements//

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styles

message.style.backgroundColor = '#37383d'; //this are set as inline styles
message.style.width = '120%';

// console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 60 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

//Non-standard
console.log(logo.designer); //will not work
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

//Data attributes

console.log(logo.dataset.versionNumber); //always start with data

//Classes

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//Don't use, this overrides all the existing classes

logo.className = 'jonas';
