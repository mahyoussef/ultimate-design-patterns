import 'package:dart_lang/a_solid/helper_classes/order.dart';
import 'package:dart_lang/a_solid/helper_classes/payment.dart';
import 'package:dart_lang/utils/equals_ignore_case.dart';

class PaymentProcessor {
  void processPayment(Order order, Payment payment) {
    print("Processing payment of order ${order.name}");
    print("Issuing payment for amount ${order.price}");
    if (equalsIgnoreCase(payment.type, "VISA")) {
      print("Processing visa card payments...");
    } else if (equalsIgnoreCase(payment.type, "Master_Card")) {
      print("Processing master card payments...");
    } else if (equalsIgnoreCase(payment.type, "American_Express")) {
      print("Processing american express card payments...");
    } else {
      throw UnsupportedError("Un supported payment...");
    }
  }
}
