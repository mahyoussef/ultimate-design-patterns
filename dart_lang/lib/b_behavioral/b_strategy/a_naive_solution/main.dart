import 'package:dart_lang/b_behavioral/b_strategy/a_naive_solution/a_naive_solution.dart';

void main() {
  const Product product1 = Product(name: "Mobile", price: 1000);
  const Product product2 = Product(name: "Labtop", price: 10000);
  const Product product3 = Product(name: "PC", price: 5000);

  double price1 = product1.calculatePrice(MembershipType.regular);
  double price2 = product2.calculatePrice(MembershipType.gold);
  double price3 = product3.calculatePrice(MembershipType.premium);

  const Checkout checkout = Checkout();
  checkout.processPayment(price1, PaymentMethod.bankTransfer);
  checkout.processPayment(price2, PaymentMethod.payPal);
  checkout.processPayment(price3, PaymentMethod.visaCard);
}
