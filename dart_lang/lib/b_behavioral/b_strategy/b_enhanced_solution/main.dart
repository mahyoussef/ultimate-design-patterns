import 'package:dart_lang/b_behavioral/b_strategy/b_enhanced_solution/b_enhanced_solution.dart';
import 'package:dart_lang/b_behavioral/b_strategy/b_enhanced_solution/payment_strategy/strategies/strategies.dart';
import 'package:dart_lang/b_behavioral/b_strategy/b_enhanced_solution/pricing_strategy/strategies/strategies.dart';

void main() {
  const Product product1 = Product(
      name: "Mobile", price: 1000, pricingStrategy: GoldPricingStrategy());
  const Product product2 = Product(
      name: "Labtop", price: 10000, pricingStrategy: RegularPricingStrategy());
  const Product product3 = Product(
      name: "PC", price: 5000, pricingStrategy: PremiumPricingStrategy());

  double price1 = product1.calculatePrice();
  double price2 = product2.calculatePrice();
  double price3 = product3.calculatePrice();

  const Checkout visaCardCheckout =
      Checkout(paymentStrategy: VisaCardPaymentStrategy());
  const Checkout paypalCheckout =
      Checkout(paymentStrategy: PaypalPaymentStrategy());
  const Checkout bankTransferCheckout =
      Checkout(paymentStrategy: BankTransferPaymentStrategy());

  visaCardCheckout.processPayment(price1);
  paypalCheckout.processPayment(price2);
  bankTransferCheckout.processPayment(price3);
}
