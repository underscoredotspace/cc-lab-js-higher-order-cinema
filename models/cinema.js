const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getFilmTitles = function() {
  const filmTitles = this.films.map((film) => {
    return film.title; 
  })
  return filmTitles;
}

Cinema.prototype.getFilmByTitle = function(title) {
  return this.films.find(film => film.title === title);
}

Cinema.prototype.getFilmsByGenre = function(genre) {
  const filmsByGenre = this.films.filter((film) => {
    return film.genre === genre;
  })

  return filmsByGenre;
}