// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  calculateTotalPrice(quantity) {
    console.log(`total price for ${this.name} is ${this.price * quantity}`);
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }
  calculateTotalPrice(quantity) {
    super.calculateTotalPrice(quantity);
    console.log(`it has the warrenty duration of ${this.warrantyPeriod} years`);
  }
}

let product = new PersonalCareProduct(1, "Shampoo", 10, 2);
product.calculateTotalPrice(2);
