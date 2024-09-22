import { PaymentStrategy } from "./payment-strategy";

export class MasterCardPaymentStrategy implements PaymentStrategy {
    processPayment(amount: number) {
        console.log("Processing MasterCard payment.");
    }
    
}