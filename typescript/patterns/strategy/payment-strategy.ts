export interface PaymentStrategy {
  processPayment(price: number): void;
}
