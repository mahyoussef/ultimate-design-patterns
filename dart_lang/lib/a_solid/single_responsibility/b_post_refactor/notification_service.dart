import 'package:dart_lang/a_solid/helper_classes/customer.dart';

class NotificationService {
  void sendingEmailNotification(Customer customer, String message) {
    print(
        "Sending email notification to: ${customer.email} with message: $message");
  }
}
