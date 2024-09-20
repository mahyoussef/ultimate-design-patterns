class MasterCard implements PaymentMethod {
  getType(): string {
    return "master_card";
  }
}
