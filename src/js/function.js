"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 20;
    console.log(num);
}

showFirstMessage('qew');
console.log(num);

function calc (a, b) {
    return (a + b);
}

console.log(calc(3,3));
console.log(calc(3,2));

function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(ret());

const logger = function() {
    console.log('hello');    
};

logger();

const calc2 = (a, b) =>  {
    console.log('1');
    return a + b;
};

calc2();