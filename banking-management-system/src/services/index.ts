export class BankingService {
    validateAccount(accountId: string): boolean {
        // Logic to validate if the account exists
        return true; // Placeholder return value
    }

    calculateInterest(balance: number, rate: number, time: number): number {
        return (balance * rate * time) / 100;
    }
}