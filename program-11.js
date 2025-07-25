// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `Deposited $${amount} into account ${this.accountNumber}. New balance`
    );
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficent balance");
    }
  }

  transfer(bankAcc, amount) {
    this.withdraw(amount);
    bankAcc.deposit(amount);
  }
}

let account1 = new BankAccount(12345, "Dhruv Burada", 1000);
let account2 = new BankAccount(789456, "Honey Burada", 1000);

console.log(account1);
console.log(account2);

account1.transfer(account2, 200);

console.log(account1);
console.log(account2);
