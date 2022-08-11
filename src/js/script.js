"use strict";

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

// const hamburger = 0;
// const fries = null;
// const cola = 0;

// console.log(hamburger || cola || fries );

// if (hamburger || cola || fries) {
//     console.log('eats');
// } else {
//     console.log('not eats');
// }

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'rewfdvdrg');

    // Циклы урок 22

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

for (let i = 5; i <= 10 ; i++ ){
    console.log(i);
}

for (let i = 20; i >= 10 ; i-- ){
    if (i === 13){
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10 ; i++ ){
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i <= 16){
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }
}

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

const arrayOfNumbers = [];
for (let i = 5;i < 11;i++){
    arrayOfNumbers[i - 5] = i; //i-5 высчитывает индекс ячейки в которуюзаписывается число
}
console.log(arrayOfNumbers);

let arr = [];
arr[0] = 'one';
arr[3] = 'three';
console.log(arr);



