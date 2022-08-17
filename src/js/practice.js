"use strict";

    // практика ч.1 урок 19 / ч.2 урок 24

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
}

start();

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


function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Все пропало !!!');
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log("Данные засекречены");
    }
}

showMyDB(personalMovieDB.private);

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Выш любимый жанр под номером ${i}`);
    }
}

writeYourGeners();

