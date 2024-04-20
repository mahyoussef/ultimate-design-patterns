import 'package:dart_lang/b_behavioral/b_strategy/b_enhanced_solution/payment_strategy/payment_strategy.dart';

class Checkout {
  final PaymentStrategy _paymentStrategy;

  const Checkout({required PaymentStrategy paymentStrategy})
      : _paymentStrategy = paymentStrategy;

  void processPayment(double price) {
    _paymentStrategy.processPayment(price);
  }
}
