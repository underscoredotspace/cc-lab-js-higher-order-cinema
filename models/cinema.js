const Cinema = function (films) {
  this.films = films;
};


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

Cinema.prototype.hasFilmFromYear = function(year) {
  return this.films.some(film => film.year === year)
}

Cinema.prototype.allFilmsLongerThan = function(length) {
  return this.films.every(film => film.length > length)
}

Cinema.prototype.totalRunningTime = function() {
  let total = this.films.reduce((acc, film) => {
    return acc + film.length;
  }, 0)
  return total;
}

Cinema.prototype.getFilmsByYear = function(year) {
  return this.films.filter(film => film.year === year);
}

module.exports = Cinema;