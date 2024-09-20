import { PaymentStrategy } from "./PaymentStrategy";

export class MasterCardPaymentStrategy implements PaymentStrategy {
    processPayment(amount: number) {
        console.log("Processig MasterCard payment.");
    }
    
}