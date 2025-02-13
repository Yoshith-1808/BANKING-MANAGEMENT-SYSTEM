export interface Account {
    accountId: string;
    accountHolder: string;
    balance: number;
}

export interface Transaction {
    transactionId: string;
    accountId: string;
    amount: number;
    transactionType: 'deposit' | 'withdraw';
    date: Date;
}