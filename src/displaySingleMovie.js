import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

const displayMovie = (data) => {
  // Hide Loading
  hideLoading();
  console.log(data);
  const {
    Actors: actors,
    Awards: awards,
    BoxOffice: boxOffice,
    Country: country,
    DVD: dvd,
    Director: director,
    Genre: genre,
    Language: language,
    Metascore: metascore,
    Plot: plot,
    Poster: image,
    Rated: rated,
    Ratings: ratings,
    Released: released,
    Runtime: runtime,
    Title: title,
    Type: type,
    Website: website,
    Writer: writer,
    Year: year,
    imdbRating: rating,
    imdbVotes: votes,
  } = data;

  document.title = title;

  const img = new Image();
  img.src = image;
  img.alt = title;
  img.classList.add('movie-img');

  const movieInfo = getElement('.movie-info');
  const imgContainer = getElement('.img-container');

  imgContainer.innerHTML = `
  <img src="${image}" alt="${title} class="movie-img">
  <span class="genre">${genre}</span>
  <span class="rated">${rated}</span>
  <span class="language">${language}</span>
  <span class="type">${type}</span>
  `;

  movieInfo.innerHTML = `
  <h3>${title}</h3>
  <p>${plot === 'N/A' ? '' : plot}</p>
  <h4>${actors === 'N/A' ? '' : 'Actors'}</h4>
  <p>${actors === 'N/A' ? '' : actors}</p>
  <h4>${director === 'N/A' ? '' : 'Directors'}</h4>
  <p>${director === 'N/A' ? '' : director}</p>
  <h4>${awards === 'N/A' ? '' : 'Awards'}</h4>
  <p>${awards === 'N/A' ? '' : awards}</p>
  <h4>${boxOffice === 'N/A' || boxOffice === undefined ? '' : 'Box Office'}</h4>
  <p>${boxOffice === 'N/A' || boxOffice === undefined ? '' : boxOffice}</p>
  <h4>${released === 'N/A' ? '' : 'Release Date'}</h4>
  <p>${released === 'N/A' ? '' : released}</p>
  <h4>${runtime === 'N/A' ? '' : 'Runtime'}</h4>
  <p>${runtime === 'N/A' ? '' : runtime}</p>
  <a href="index.html" class="btn">Back to search</a>
  `;
};

export default displayMovie;
