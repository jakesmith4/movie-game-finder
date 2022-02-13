import fetchMovies from './src/fetchMovies.js';
import displayMovie from './src/displaySingleMovie.js';

const presentMovie = async () => {
  const id = localStorage.getItem('movie');
  if (!id) {
    window.location.replace('index.html');
  } else {
    const movie = await fetchMovies(
      `https://www.omdbapi.com/?i=${id}&plot=full&apikey=2940c5b0`
    );
    displayMovie(movie);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  presentMovie();
});
