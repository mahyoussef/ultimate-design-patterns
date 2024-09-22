enum EnumPaymentMethod {
  VISA_CARD = "VISA_CARD",
  MASTER_CARD = "MASTER_CARD",
  PAYPAL = "PAYPAL",
}

interface PaymentMethod {
  getType(): string;
}
