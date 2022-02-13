const setMovie = (section) => {
  // console.log(section);
  section.addEventListener('click', (e) => {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('movie', id);
    const input = document.querySelector('#movie-input');
    const value = input.value;
    console.log(value);
    if (value) {
      localStorage.setItem('inputValue', value);
    }
  });
};

export default setMovie;
