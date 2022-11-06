"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };
// jonh.__proto__ = soldier; //устарело
// Object.setPrototypeOf(jonh, soldier);
// console.log(jonh.armor);
jonh.sayHello();

// динамическая типизация данных
// to String
console.log(typeof(String(4)));

console.log(typeof(4 + ""));

const num = 5;
console.log("sdgfd" + num);

const fontSize = 26 + "px";
console.log(fontSize);

//to number

console.log(typeof(Number(4)));

console.log(typeof(+"23"));

console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// to boolean

// 0, "", null, undefined, NaN; = false

let switcher = null;

if(switcher) {
    console.log("Working...");
}

switcher = 1;

if(switcher) {
    console.log("Working...");
}

console.log(typeof(Boolean("3")));

console.log(typeof(!!"2321"));




