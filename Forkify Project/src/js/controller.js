import * as model from './model.js';
import recipeView from './views/recipeViews.js';

// import icons from "../img/icons.svg";//Parcel 1
import icons from 'url:../img/icons.svg'; //Parcel 2
import 'core-js/stable'; //pollifiling
import 'regenerator-runtime'; //pollifiling
console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const renderSpinner = function (parentEl) {
  const markup = `<div class="spinner">
  <svg>
    <use href="${icons}#icon-loader"></use>
  </svg>
</div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return; //guard clause
    renderSpinner(recipeContainer);
    //1.Loading recipe
    await model.loadRecipe(id);

    //2.Rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
showRecipe();

['hashchange', 'load'].forEach(e => window.addEventListener('ev', showRecipe));

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
