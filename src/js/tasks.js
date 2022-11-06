"use strict";

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

function calculateVolumeAndArea(cubeEdgeLength) {
    if (Number.isInteger(cubeEdgeLength) && cubeEdgeLength > 0) {
        let about = cubeEdgeLength * cubeEdgeLength * cubeEdgeLength;
        let square = (cubeEdgeLength * cubeEdgeLength) * 6;
        return `Объем куба: ${about}, площадь всей поверхности: ${square}`;
    } 
        return "При вычислении произошла ошибка";
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea(-15));
console.log(calculateVolumeAndArea("154"));

// У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, но ему не хватает навыков. Выполните часть заданий за него.
// Задачи:
// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно
// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

const personalPlanPeter = {
    name: "Peter",
    age: "28",
    skills: {
        languages: ['ru', 'eng', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan){
        let res = `Мне ${plan.age} и я владею языками: `;
        plan.skills.languages.forEach(function(el, i) {
            res += `${el.toUpperCase()} `;
        });
        return  res;
        }
    };


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// console.log(personalPlanPeter.skills.programmingLangs.js);

function showExperience(plan) {
    //нужны проверки на то есть ли вообще эти своиства
    return plan.skills.exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let res = "";
    for (let key in plan.skills.programmingLangs){
        res += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;  
    }
    return res;
}

console.log(showProgrammingLangs(personalPlanPeter));

// Задачи: 11
// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let res = "Семья состоит из:";
    if (arr.length > 0) {
        arr.forEach(function(i) {
            res += ` ${i}`;
        });
    } else {
        res = "Семья пуста";
    }
    return res;
}
      

console.log(showFamily(family));
console.log(family.length);

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    // let res = ``;
    arr.forEach(function(i){
        // res += `${i.toLowerCase()}\n`;
        console.log(`${i.toLowerCase()}`);
    });
    // return res;
}

standardizeStrings(favoriteCities);

// Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

let text = "Привет";

console.log(text.length);
console.log(text.split("").reverse().join(""));
console.log(text[5]);
console.log(text[4]);


function reverse(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverse(text));


// Задание:
// У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. Нужно исправить функции так, чтобы они давали всегда правильный результат.
// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.
// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (average
// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.
// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.
// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));  //решено

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//         console.log(+fDish.price.slice(0, -1));
//         console.log(sDish.price.slice(0, -1));
//         return 'Цена ниже средней';
//     } else {
//         console.log(fDish.price.slice(0, -1));
//         console.log(sDish.price.slice(0, -1));
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice)); //решено

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);






