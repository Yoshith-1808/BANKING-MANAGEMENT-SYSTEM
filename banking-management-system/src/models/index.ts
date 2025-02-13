export class Account {
    accountId: string;
    accountHolder: string;
    balance: number;

    constructor(accountId: string, accountHolder: string, initialBalance: number = 0) {
        this.accountId = accountId;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            throw new Error("Deposit amount must be positive");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            throw new Error("Insufficient funds or invalid withdrawal amount");
        }
    }
}