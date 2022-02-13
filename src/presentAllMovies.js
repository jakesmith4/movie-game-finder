import presentMovies from './presentMovies.js';
import getElement from './getElement.js';

const input = getElement('[name="movie"]');

const presentAllMovies = () => {
  const value = input.value;
  const valueArray = value.split(' ');
  if (!value) return;
  if (valueArray.length === 1) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}&apikey=2940c5b0`
    );
  }
  if (valueArray.length === 2) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}+${valueArray[1]}&apikey=2940c5b0`
    );
  }
  if (valueArray.length === 3) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}+${valueArray[1]}+${valueArray[2]}&apikey=2940c5b0`
    );
  }
  if (valueArray.length === 4) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}+${valueArray[1]}+${valueArray[2]}+${valueArray[3]}&apikey=2940c5b0`
    );
  }
  if (valueArray.length === 5) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}+${valueArray[1]}+${valueArray[2]}+${valueArray[3]}+${valueArray[4]}&apikey=2940c5b0`
    );
  }
  if (valueArray.length === 6) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}+${valueArray[1]}+${valueArray[2]}+${valueArray[3]}+${valueArray[4]}+${valueArray[5]}&apikey=2940c5b0`
    );
  }
  if (valueArray.length === 7) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}+${valueArray[1]}+${valueArray[2]}+${valueArray[3]}+${valueArray[4]}+${valueArray[5]}+${valueArray[6]}&apikey=2940c5b0`
    );
  }
  if (valueArray.length === 8) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}+${valueArray[1]}+${valueArray[2]}+${valueArray[3]}+${valueArray[4]}+${valueArray[5]}+${valueArray[6]}+${valueArray[7]}&apikey=2940c5b0`
    );
  }
  if (valueArray.length === 9) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}+${valueArray[1]}+${valueArray[2]}+${valueArray[3]}+${valueArray[4]}+${valueArray[5]}+${valueArray[6]}+${valueArray[7]}+${valueArray[8]}&apikey=2940c5b0`
    );
  }
  if (valueArray.length === 9) {
    presentMovies(
      `https://www.omdbapi.com/?s=${valueArray[0]}+${valueArray[1]}+${valueArray[2]}+${valueArray[3]}+${valueArray[4]}+${valueArray[5]}+${valueArray[6]}+${valueArray[7]}+${valueArray[8]}+${valueArray[9]}&apikey=2940c5b0`
    );
  }
};

export default presentAllMovies;
