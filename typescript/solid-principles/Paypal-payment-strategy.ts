import { PaymentStrategy } from "./payment-strategy";

export class PayPalPaymentStrategy implements PaymentStrategy {
    processPayment(amount: number) {
        console.log("Processing PayPal payment.");
    }
    
}