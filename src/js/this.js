'use strict';

// function shiwThis(a, b) {
//     console.log(this);
//     function sum () {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// shiwThis(4,5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('hello! ' + this.name);
//     };
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// }

// sayName.call(user, "Smith");
// sayName.apply(user, ['aaaa']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

const double = (a) => {
    return a * 2;
};





//1) Обычная функция: this = window, но если use strict - undrfined
//2) Контекст у методов обьктва - сам обьект
//3) this в конструкторах и классах - это новый экземпляр обьекта
//4) Ручная привязка this: call, apply,  bind



