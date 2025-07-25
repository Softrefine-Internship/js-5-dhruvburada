// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  set make(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this._make = value;
    } else {
      throw new Error("Invalid make");
    }
  }

  set model(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this._model = value;
    } else {
      throw new Error("Invalid model");
    }
  }

  set year(value) {
    if (typeof value === "number" && value > 1700) {
      this._make = value;
    } else {
      throw new Error("Invalid year");
    }
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors, airbags) {
    super(make, model, year);
    this.doors = doors;
    this.airbags = airbags;
  }

  set doors(value) {
    if (typeof value === "number" && value === 4) {
      this._doors = value;
    } else {
      throw new Error("Invalid doors");
    }
  }

  set airbags(value) {
    if (typeof value === "number" && value <= 4) {
      this._airbags = value;
    } else {
      throw new Error("Invalid airbags");
    }
  }
  display() {
    console.log(
      `Make : ${this.make}\nModel:${this.model}\nYear:${this.year}\nDoors:${this.doors}\nairbags:${this.airbags}`
    );
  }
}

const c1 = new Car("BMW", "C1", 2020, 4, 4);
const c2 = new Car("BMW", "C1", 2020, 4, 3);

console.log(c1);
console.log(c2);
