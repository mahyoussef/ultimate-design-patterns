import 'package:dart_lang/a_solid/helper_classes/customer.dart';
import 'package:dart_lang/a_solid/helper_classes/order.dart';
import 'package:dart_lang/a_solid/helper_classes/payment.dart';
import 'package:dart_lang/utils/equals_ignore_case.dart';

class OrderManager {
  void processOrder(Order order) {
    print("Processing order: ${order.name} now...");
  }

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

  void sendingEmailNotification(Customer customer, String message) {
    print(
        "Sending email notification to: ${customer.email} with message: $message");
  }
}
