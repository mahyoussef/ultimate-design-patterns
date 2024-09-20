import { PaymentStrategy } from "./PaymentStrategy";

export class VisaPaymentStrategy implements PaymentStrategy {
    processPayment(amount: number) {
        console.log("Processig VISA payment.");
    }
    
}