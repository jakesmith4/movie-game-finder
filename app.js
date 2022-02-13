import PresentMovies from './src/presentMovies.js';
import './src/searchForm.js';

const inputValue = localStorage.getItem('inputValue');
console.log(inputValue);

let URL = '';

inputValue === null || inputValue === ''
  ? (URL = 'https://www.omdbapi.com/?s=harry+potter&plot=full&apikey=2940c5b0')
  : (URL = `https://www.omdbapi.com/?s=${inputValue}&plot=full&apikey=2940c5b0`);

window.addEventListener('DOMContentLoaded', () => {
  PresentMovies(URL);
});
