import { PaymentStrategy } from "./payment-strategy";

export class AmericanExpressPaymentStrategy implements PaymentStrategy {
    processPayment(amount: number) {
        console.log("Processig AmericanExpress payment.");
    }
    
}