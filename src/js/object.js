"use strict";

const options = {
    name: "test",
    width: 1024,
    heigth: 1024,
    coloms: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.coloms;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["coloms"]["bg"]);
// delete options.name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log (`Свойство ${i}, имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log (`Свойство ${key}, имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

for (let key in personalPlanPeter.skills.programmingLangs){
        console.log(`Язык ${key} изучен на ${personalPlanPeter.skills.programmingLangs[key]}`);  
}