import 'payment_strategy.dart';

class VisaPaymentStrategy implements PaymentStrategy {
  @override
  void processPayment(double amount) {
    print("Processing visa payments...");
  }
}
