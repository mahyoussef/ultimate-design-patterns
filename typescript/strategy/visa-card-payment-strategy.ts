import type { PaymentStrategy } from "./payment-strategy";

export class VisaCardPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log("Processing payment of visa cards...");
    console.log(`Calculating fees of the amount ${amount} for visa cards...`);
  }
}
