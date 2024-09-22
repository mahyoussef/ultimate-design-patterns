class PayPal implements PaymentMethod {
  getType(): string {
    return "paypal";
  }
}
