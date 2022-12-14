'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;

    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, "hello", 'red');

div.showMyProps();
console.log(div.calcArea());

// let rec = new Rectangle(2, 2);
// console.log(rec.calcArea());