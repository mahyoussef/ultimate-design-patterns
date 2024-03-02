import 'payment_strategy.dart';

class AmericanExpressPaymentStrategy implements PaymentStrategy {
  @override
  void processPayment(double amount) {
    print("Processing american express payments...");
  }
}
