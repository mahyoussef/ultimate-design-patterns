import 'package:dart_lang/c_strategy/b_enhanced_solution/payment_strategy/payment_strategy_interface.dart';

class VisaCardPaymentStrategy implements PaymentStrategy {
  const VisaCardPaymentStrategy();
  @override
  void processPayment(double price) {
    print("processing with price: \$${price + 100} after \$100 fees.");
  }
}
