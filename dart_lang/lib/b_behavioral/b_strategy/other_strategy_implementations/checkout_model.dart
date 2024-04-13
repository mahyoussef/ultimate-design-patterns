import 'package:dart_lang/b_behavioral/b_strategy/other_strategy_implementations/payment_strategy.dart';

class Checkout {
  final PaymentStrategy paymentStrategy;
  Checkout(this.paymentStrategy);
  void processPayment(double amount) {
    paymentStrategy.processPayment(amount);
  }
}
