import getElement from './getElement.js';
import presentMovies from './presentMovies.js';
// import presentAllMovies from './presentAllMovies.js';

const form = getElement('.search-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = getElement('[name="movie"]');
  const value = input.value;
  presentMovies(`https://www.omdbapi.com/?s=${value}&apikey=2940c5b0`);
});

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  const input = getElement('[name="movie"]');
  const value = input.value;
  presentMovies(`https://www.omdbapi.com/?s=${value}&apikey=2940c5b0`);
});
