'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`);
}

const ivan = new User('ivan', 123);
const alex = new User('alex', 432);

ivan.exit();

// console.log(ivan);
// console.log(alex);

// ivan.hello();