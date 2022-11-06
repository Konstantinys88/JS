"use strict";

// function hello() {
//     console.log("Hello");
// }

// hello();

// function hi () {
//     console.log("Say hi!");
// }

// hi();

// const arr = [2, 3, 5, 6, 1, 14];
// ar.sort(compareNum);

// console.log(arr);

// function compareNum(a, b){
//     return a - b;
// }

// arr.pop();  //удалить элемент в конце массива
// arr.push(10); //добавить элемент в конце массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));


//88

    //filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter((name) => {
//     return name.length < 5;
// });

// console.log(shortNames);

    //map

// const answers = ['IvAN', 'AnnA', 'Hello'];
// const result = answers.map( item => item.toLowerCase());
// console.log(result);

    //every/some

// const some = [4, 'qwq', 'sffsfsf'];
// console.log(some.some(item => typeof(item) === 'number'));

// const every = [4, 4, 5];
// console.log(every.every(item => typeof(item) === 'number'));

    //reduce

// const arr = [4, 5, 1, 3, 2, 6];
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const arr2 = ['apple', 'pear', 'plum'];
// const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res2);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animsl',
//     cat: 'animal',
// };

// let newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);
// console.log(newArr);

    // Задания на работу с методами массивов
    // В этих заданиях мы с вами потренируемся работать с методами массивов.
    // Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.
    // Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.
    // Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.
    // Задачи:
    // 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
    // P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...
    // 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
    // Пример:
    // showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"
    // 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
    // Пример:
    // setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]
    // 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)
    // P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу, чтобы вы запомнили. Внимательно проследите за тем, что происходит внутри коллбэка и что будет проверяться. Дополнительно расписал этот момент в комментариях в ответах.
    // Ответ с кодом этих задач можно найти тут: ссылка
    // Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.
    // Но постарайтесь решить самостоятельно 🙂


    const films = [
        {
            name: 'Titanic',
            rating: 9
        },
        {
            name: 'Die hard 5',
            rating: 5
        },
        {
            name: 'Matrix',
            rating: 8
        },
        {
            name: 'Some bad film',
            rating: 4
        }
    ];

    // console.log(checkFilms(films));

// 1)
// let res = films.filter(item => item.rating >= 8);
// console.log(res);
    
    // function showGoodFilms(arr) {
    //     return arr.filter(item => item.rating >= 8);
    // }

    // let res = showGoodFilms(films);
    // console.log(res);


// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
// Пример:
// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

    function showListOfFilms(arr) {
        return arr.reduce((film, curr) => `${typeof(film) === 'object' ? film.name : film}, ${curr.name}`);
    }

//    console.log(showListOfFilms(films));

    let res = films.reduce((film, curr) => `${typeof(film) === 'object' ? film.name : film}, ${curr.name}`);
    // console.log(res);


    // 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
    // Пример:
    // setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

    function setFilmsIds(arr) {
        return arr.map((item, i) => {
            item.id = i;
            return item;
        });
    }

     // 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)
     console.log(checkFilms(films));
     
    let tranformedArray = setFilmsIds(films);

    // console.log(tranformedArray);

    function checkFilms(arr) {
        // return arr.every(film => film.id || film.id === 0 ? true : false);
        return arr.every(item => typeof(item.id) === 'number');
        // return arr.every(film => film.id || film.id === 0)
        // return arr.every(film => 'id' in film);
    }

    // console.log(tranformedArray);
    console.log(checkFilms(tranformedArray));
    // console.log(films);
    console.log(checkFilms(films));


    // function showListOfFilms(arr) {
    
    // }

  