import 'package:dart_lang/b_behavioral/b_strategy/b_enhanced_solution/payment_strategy/payment_strategy_interface.dart';

class PaypalPaymentStrategy implements PaymentStrategy {
  const PaypalPaymentStrategy();
  @override
  void processPayment(double price) {
    print("processing with price: \$${price + 200} after \$200 fees.");
  }
}
