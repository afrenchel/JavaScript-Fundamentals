'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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

//Btn scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll(x/y)', window.pageXOffset, window.pageYOffset); //current scroll position

  console.log(
    'height/width vieport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
}); // get currently viewport height/width of the client

//Page navigation

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

//?Event Delegation

//1.Add event listener to common parent element
//2.Determine ehat element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed component

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

//Adding event handlers to the buttons(tabs)

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard clause
  if (!clicked) return; //if clicked doesn't exist stop everything and don't execute anything else

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active tab

  clicked.classList.add('operations__tab--active');

  //Activate content area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//2-solution
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//?3-solution using bind//DRY code
//Passing an "argument" into handler function
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
//////////////////////////////////////////////////////////////////
// //////!Lecture////

// // //?Ways on selecting elements//
// // console.log(document.documentElement);
// // console.log(document.head);
// // console.log(document.body);

// // const header = document.querySelector('.header');
// // const allSections = document.querySelectorAll('.section');
// // console.log(allSections);

// // document.getElementById('section--1');

// // const allButtons = document.getElementsByTagName('button');
// // console.log(allButtons); //HTML Collection update automatically

// // document.getElementsByClassName('btn');

// // //?Creating and inserting elements//

// // //.insertAdjacentHTML//

// // const message = document.createElement('div'); //create a DOM element and stores the element in message constant
// // message.classList.add('cookie-message');
// // message.textContent =
// //   'We use cookies for improved functionality and analytics.';

// // message.innerHTML =
// //   'We use cookies for improved functionality and analytics. <button class="btn--close-cookie"> Got it! </button>';

// // header.prepend(message); //adds the element as the first child
// // // header.append(message); //adds the elements as the last child
// // header.append(message.cloneNode(true)); // we get 2 cookie message, we clone the DOM elemetn we have just created

// // // header.before(message);
// // // header.after(message);

// // //?Delete elements//

// // document
// //   .querySelector('.btn--close-cookie')
// //   .addEventListener('click', function () {
// //     message.remove();
// //   });

// // //Styles

// // message.style.backgroundColor = '#37383d'; //this are set as inline styles
// // message.style.width = '120%';

// // // console.log(getComputedStyle(message).color);

// // message.style.height =
// //   Number.parseFloat(getComputedStyle(message).height, 10) + 60 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // //Attributes

// // const logo = document.querySelector('.nav__logo');
// // console.log(logo.alt);
// // console.log(logo.src);

// // //Non-standard
// // console.log(logo.designer); //will not work
// // console.log(logo.getAttribute('designer'));
// // logo.setAttribute('company', 'Bankist');

// // //Data attributes

// // console.log(logo.dataset.versionNumber); //always start with data

// // //Classes

// // logo.classList.add('c');
// // logo.classList.remove('c');
// // logo.classList.toggle('c');
// // logo.classList.contains('c');

// // //Don't use, this overrides all the existing classes

// // logo.className = 'jonas';

// //rgb(255,255,255)

// const randomColor = () => '#' + Math.random().toString(16).slice(-6);

// console.log(randomColor);

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   e.stopPropagation(); //Stop propagation
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll(x/y)', window.pageXOffset, window.pageYOffset); //current scroll position

//   console.log(
//     'height/width vieport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   ); // get currently viewport height/width of the client

//   //Scrolling-old way of scrolling

//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // ); //current position + current scroll

//   //Smooth scrolling, you have to create a object  with behaviour proprety

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   //Scrolling- new way

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addeventListener: Great!You are reading the heading');
// };

// //remove event listeners
// h1.removeEventListener('mouseenter', alertH1);

// //remove after 3 seconds

// setTimeout(() => h1.removeEventListener('mouseleave', alertH1), 3000);

// // h1.addEventListener('mouseenter', function (e) {
// //   alert('addeventListener: Great!You are reading the heading');
// // });

// //Old way/another way

// // h1.onmouseenter = function (e) {
// //   alert('addeventListener: Great!You are reading the heading');
// // };

// //?DOM traversing//
// const h1 = document.querySelector('h1');

// //Going downwards: child elements

// console.log(h1.querySelectorAll('.highlight')); //only child element with highlight class
// console.log(h1.childNodes); //all child of the h1
// console.log(h1.children); // HTML collection

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'pink';

// //Going upwards: parent elements

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary) '; //selected the closest header to h1 , closest parent that has this class

// //Going sideways; selecting siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children); //all siblings

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
