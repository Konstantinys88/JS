"use strict";

// function pow(x, n){
//     let result = 1;

//     for(let i = 0; i < n; i++) {
//         result = x * result;
//     }
//     return result;
// }


// console.log(pow(4,2));

// function pow(x, n){
//     if(n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(4,2));

//=====
let students = {
    js: [{
        name: 'Johs',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)){
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i ++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }
//     return total / students;
// }


// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        
        return [total, data.length];
    } else {
        let total = [0, 0];

        for(let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }    
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);

// (*) Задача на рекурсию
// Здесь мы с вами рассмотрим одну из классических задач на рекурсию, которую дают на собеседованиях. Звучит она очень просто:
// Напишите функцию, которая вычисляет факториал.
// Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.
// Сам же факториал с примерами выглядит вот так:

// n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула

// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// То есть, вызов нашей функции factorial(5) возвращает число 120

// factorial(4) => 24

// Решить задачу нужно через рекурсию.
// Ответ с кодом этой задачи можно найти тут: ссылка
// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.
// Но постарайтесь решить самостоятельно 🙂

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else if (!Number.isInteger(n) || typeof(n) !== 'number') {
        return 'Не число';
    }
    else {
        return n * factorial(n - 1);
    }  
}


// function factorial(n) {
//     if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//         return "Ошибка, проверьте данные";
//     }

//     if (n >= 1) {
//         return n * factorial(n - 1);
//     } else {
//         return 1;
//     }
// }

console.log(factorial(5));
console.log(factorial("aaa"));
console.log(factorial(5.2));
console.log(factorial(0));