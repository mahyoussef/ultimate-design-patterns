class PaymentManager {
  processPayment(amount: number, paymentMethod: PaymentMethod): void {
    console.log(
      `Processing the overall payment with amount: ${amount} using ${paymentMethod.getType()}`,
    );
  }
}
