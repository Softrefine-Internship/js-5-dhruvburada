// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance || 0;
  }

  deposit(value) {
    this.balance += value;
    console.log(`${value} deposited`);
  }

  withdraw(value) {
    if (value <= this.balance) {
      this.balance -= value;
      console.log(`${value} withdrawn`);
    } else {
      throw new Error("Insufficient Balance");
    }
  }

  displayAcc() {
    console.log(
      `Account Number: ${this.accountNumber} Balance: $ ${this.balance}`
    );
  }
}

let acc = new BankAccount(123123, 0);
acc.deposit(200);
acc.displayAcc();

let acc2 = new BankAccount(123123, 10);
acc2.deposit(2000);
acc2.withdraw(2010);
acc2.displayAcc();
