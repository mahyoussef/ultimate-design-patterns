class PaymentMethodFactory {
  createPaymentMethodOf(paymentMethod: string) {
    if (paymentMethod.toUpperCase() === EnumPaymentMethod.VISA_CARD) {
      return new VisaCard();
    }
    if (paymentMethod.toUpperCase() === EnumPaymentMethod.MASTER_CARD) {
      return new MasterCard();
    }
    if (paymentMethod.toUpperCase() === EnumPaymentMethod.PAYPAL) {
      return new PayPal();
    }
    throw new Error("Unsupported payment method");
  }
}
