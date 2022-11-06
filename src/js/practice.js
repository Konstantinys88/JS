"use strict";

    // практика ч.1 урок 19 / ч.2 урок 24



const personalMovieDB = {
    count: 0,
    monies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        while(personalMovieDB.counts == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?','').trim(),
                  b = prompt('На сколько его оцените','');

            if (a != null && b != null && a != '' &&  b != '' && a.length < 50){
                personalMovieDB.monies[a] = b;
                console.log('ok');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы класический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Все пропало !!!');
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }

    },
    writeYourGeners: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Выш любимый жанр под номером ${i}`);
            if (genre == "" || genre == null) {
                console.log("Не корректные данные");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};






