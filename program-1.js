class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Name must be a non-empty string.");
    }
    this._name = value.trim();
  }

  set age(value) {
    if (typeof value !== "number" || value < 0 || value > 120) {
      throw new RangeError("Age must be a number between 0 and 120.");
    }
    this._age = value;
  }

  set country(value) {
    if (typeof value !== "string" || value.trim().length < 2) {
      throw new Error(
        "Country must be a valid name with at least 2 characters."
      );
    }
    this._country = value.trim();
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get country() {
    return this._country;
  }

  display() {
    console.log(
      `My name is ${this.name}, I am ${this.age} years old and I live in ${this.country}.`
    );
  }
}

let p1 = new Person("Dhruv", "18", "India");
let p2 = new Person("Burada ", "21", "USA");

console.log(p1);
