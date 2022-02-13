import fetchMovies from './fetchMovies.js';
import displayMovies from './displayMovies.js';
import setMovie from './setMovie.js';

const showMovies = async (url) => {
  // Fetch Movie
  const data = await fetchMovies(url);
  // console.log(data);

  // Display Movie
  const section = await displayMovies(data);
  if (section) {
    setMovie(section);
  }
};

export default showMovies;
