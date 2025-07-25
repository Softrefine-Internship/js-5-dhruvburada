// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  display() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Year: ${this.year}`);
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }
  display() {
    super.display();
    console.log(`Price: ${this.price}`);
  }
}

const ebook = new Ebook("Think and Grow Rich", "Nipollian Hills", 2012, 500);

ebook.display();
