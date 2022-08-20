"use strict";

const arr = [2, 3, 5, 6, 1, 14];
arr.sort(compareNum);

console.log(arr);

function compareNum(a, b){
    return a - b;
}

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