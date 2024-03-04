import 'payment_strategy.dart';

class MasterCardPaymentStrategy implements PaymentStrategy {
  @override
  void processPayment(double amount) {
    print("Processing master card payments...");
  }
}
