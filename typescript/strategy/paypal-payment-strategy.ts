import type { PaymentStrategy } from "./payment-strategy";

export class PaypalPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log("Processing payment of paypal...");
    console.log(`Calculating fees of the amount ${amount} for paypal...`);
  }
}
