import 'package:dart_lang/b_behavioral/strategy/payment_strategy.dart';

class Checkout {
  final PaymentStrategy paymentStrategy;
  Checkout(this.paymentStrategy);
  void processPayment(double amount) {
    paymentStrategy.processPayment(amount);
  }
}
