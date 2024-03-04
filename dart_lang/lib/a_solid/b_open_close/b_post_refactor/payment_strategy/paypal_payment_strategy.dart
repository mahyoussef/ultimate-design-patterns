import 'payment_strategy.dart';

class PaypalPaymentStrategy implements PaymentStrategy {
  @override
  void processPayment(double amount) {
    print("Processing paypal payments...");
  }
}
