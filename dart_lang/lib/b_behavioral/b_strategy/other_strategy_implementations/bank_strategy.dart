import 'package:dart_lang/b_behavioral/b_strategy/other_strategy_implementations/payment_strategy.dart';

class BankStrategy implements PaymentStrategy {
  @override
  void processPayment(double amount) {
    print('Processing payment of $amount using Bank');
  }
}
