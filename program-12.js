// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }
  addDepartment(department) {
    this.departments.push(department);
  }

  removeDepartment(department) {
    let index = this.departments.findIndex((elem) => elem === department);
    this.departments.splice(index, 1);
  }

  display() {
    console.log(this.departments);
  }
}

const u1 = new University("RK Univeristy");

u1.addDepartment("CE");
u1.addDepartment("ME");
u1.addDepartment("EC");

u1.display();

u1.removeDepartment("EC");

u1.display();
