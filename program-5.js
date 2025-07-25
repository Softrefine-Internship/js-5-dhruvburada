// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  constructor(name) {
    this.name = name;
  }

  calcArea() {
    console.log("Shape area not implemented");
  }

  display(area) {
    console.log(`Area of ${this.name} is ${area} `);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  calcArea(radius) {
    super.display(Math.PI * this.radius ** 2);
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle");
    this.base = base;
    this.height = height;
  }
  calcArea() {
    super.display(0.5 * this.base * this.height);
  }
}

const tr1 = new Triangle(1, 1);
tr1.calcArea();

const c1 = new Circle(5);
c1.calcArea(5);
