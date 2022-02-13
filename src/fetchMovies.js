import { showLoading } from './toggleLoading.js';

const fetchMovies = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    // console.log(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchMovies;
