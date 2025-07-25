//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  Area() {
    return this._width * this._height;
  }
  Perimeter() {
    return 2 * (this._width + this._height);
  }

  set width(value) {
    if (typeof value === "number") {
      this._width = value;
    } else {
      throw new Error("width should be a number");
    }
  }

  set height(value) {
    if (typeof value === "number") {
      this._height = value;
    } else {
      throw new Error("height should be a number");
    }
  }
}

let rect = new Rectangle(12, 12);
let rect2 = new Rectangle(11, 11);

console.log(rect.Area());
console.log(rect.Perimeter());
console.log(rect2.Area());
console.log(rect2.Perimeter());
