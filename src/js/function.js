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

const usdCurr = 28;
const esrCurr = 38;
const discount = 0.9;

function convert(amount, curr) {
    // console.log(curr * amount);
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));

convert(500, usdCurr);
convert(500, esrCurr);



function sayHello(t) {
    return 'привет ' + t;
}
console.log(sayHello('Антон'));



function returnNeighboringNumbers(number) {
    let arr = [];
    arr[0] = number - 1;
    arr[1] = number;
    arr[2] = number + 1
    
    return arr;
}
console.log(returnNeighboringNumbers(5));



function getMathResult(a, b) {
    if (b <= 0 || typeof b != 'number') {
        return a;
    } else {
        let res = '';
        for (let i = 1;i <= b;i++) { // цикл будет повторятся пока i < или = b
            if ( i === b) {
                res = res + a * i;
            } 
            else {
                res = res + a * i + '---';
            }
        }
        return res;
    }
}

console.log(getMathResult(2, 5));