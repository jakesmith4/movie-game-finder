import getElement from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayMovies = (data) => {
  const section = getElement('.section-center');
  const title = getElement('.title');
  // console.log(data);

  if (data.Response === 'False') {
    // Hide Loading
    hideLoading();
    title.textContent = 'Sorry, no movies or games matched your search';
    section.innerHTML = null;
    return;
  }

  const newMovies = data.Search.map((movie) => {
    const {
      imdbID: id,
      Poster: image,
      Title: title,
      Type: type,
      Year: year,
    } = movie;

    return `
    <a href="movie.html">
    <article class="movie" data-id="${id}">
    <img src="${
      image === 'N/A' ? './img-not-found.png' : image
    }" alt="${title}" />
    <h3>${title}</h3>
    <span>${type}</span>
    <span>${year}</span>
    </article>
    </a>
    `;
  }).join('');
  // Hide Loading
  hideLoading();
  title.textContent = '';
  section.innerHTML = newMovies;
  return section;
};

export default displayMovies;
