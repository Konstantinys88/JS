"use sсtrict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    monies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько его оцените',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько его оцените','');

personalMovieDB.monies[a] = b; //ключ a - значение b
personalMovieDB.monies[c] = d;

console.log(personalMovieDB);