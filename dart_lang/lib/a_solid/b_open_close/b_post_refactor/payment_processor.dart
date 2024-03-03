import 'package:dart_lang/a_solid/b_open_close/b_post_refactor/payment_strategy/payment_strategy.dart';
import 'package:dart_lang/a_solid/helper_classes/helper_classes.dart';

class PaymentProcessor {
  final PaymentStrategy _paymentStrategy;
  PaymentProcessor(PaymentStrategy paymentStrategy)
      : _paymentStrategy = paymentStrategy;

  void processPayment(Order order, Payment payment) {
    print("Processing payment of order ${order.name}");
    print("Issuing payment for amount ${order.price}");
    _paymentStrategy.processPayment(order.price);
  }
}
