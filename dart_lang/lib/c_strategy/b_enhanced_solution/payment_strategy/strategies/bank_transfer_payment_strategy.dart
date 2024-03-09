import 'package:dart_lang/c_strategy/b_enhanced_solution/payment_strategy/payment_strategy_interface.dart';

class BankTransferPaymentStrategy implements PaymentStrategy {
  const BankTransferPaymentStrategy();
  @override
  void processPayment(double price) {
    print("processing with price: \$$price");
  }
}
