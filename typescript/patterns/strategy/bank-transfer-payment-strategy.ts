import type { PaymentStrategy } from "./payment-strategy";

export class BankTransferPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log("Processing payment of bank transfer...");
  }
}
