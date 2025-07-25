// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }
  addBranch(branchName) {
    this.branches.push(branchName);
  }
  removeBranch(branchName) {
    let index = this.branches.findIndex((element) => element === branchName);
    this.branches.splice(index, 1);
  }
  displayBranches() {
    console.log(this.branches);
  }
}

let sbi = new Bank("SBI Bank");
sbi.addBranch("Gondal");

sbi.displayBranches();
sbi.removeBranch("Gondal");
sbi.displayBranches();
