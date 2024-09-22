import type { PaymentStrategy } from "./payment-strategy";

export class Checkout {
  constructor(private readonly paymentStrategy: PaymentStrategy) {}

  processPayment(amount: number): void {
    this.paymentStrategy.processPayment(amount);
  }
}
