import { PaymentStrategy } from "./PaymentStrategy";

export class AmericanExpressPaymentStrategy implements PaymentStrategy {
    processPayment(amount: number) {
        console.log("Processig AmericanExpress payment.");
    }
    
}