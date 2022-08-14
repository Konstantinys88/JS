"use strict";

    // практика ч.1 урок 19 / ч.2 урок 24

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    monies: {},
    actors: {},
    genres: [],
    private: false
};

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько его оцените',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько его оцените','');

// personalMovieDB.monies[a] = b; //ключ a - значение b
// personalMovieDB.monies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько его оцените','');

    if (a != null && b != null && a != '' &&  b != '' && a.length < 50){
        personalMovieDB.monies[a] = b;
        console.log('ok');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Все пропало !!!');
}

console.log(personalMovieDB);