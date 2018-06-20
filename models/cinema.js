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

Cinema.prototype.getFilmsByProperty = function(property, value) {
  return this.films.filter(film => film[property] === value);
}

module.exports = Cinema;