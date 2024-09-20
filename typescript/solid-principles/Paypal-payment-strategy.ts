import { PaymentStrategy } from "./PaymentStrategy";

export class PayPalPaymentStrategy implements PaymentStrategy {
    processPayment(amount: number) {
        console.log("Processig PayPal payment.");
    }
    
}