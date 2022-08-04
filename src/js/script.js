"use sсtrict";

    // практика ч.1 урок 19

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     monies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько его оцените',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько его оцените','');

// personalMovieDB.monies[a] = b; //ключ a - значение b
// personalMovieDB.monies[c] = d;

// console.log(personalMovieDB);

    // практика ч.1 урок 20

// if ('egor' == 'egor2') {
//     console.log('ok');
// } else {
//     console.log('Error');
// }

// const num = 100;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('big');
// } else {
//     console.log ('ok');
// }

// (num == 50) ? console.log('ok') : console.log('error');

// switch (num) {
//     case 49: console.log('k1');
//     break;
//     case 48: console.log('k2');
//     break;
//     case 50: console.log('k3');
//     break;
//     case 51: console.log('k4');
//     break;
//     default: console.log('noooooo');
//     break;
// }

        // практика ч.1 урок 2

const hamburger = 0;
const fries = null;
const cola = 0;

console.log(hamburger || cola || fries );

if (hamburger || cola || fries) {
    console.log('eats');
} else {
    console.log('not eats');
}

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'rewfdvdrg');
