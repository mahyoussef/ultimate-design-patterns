import 'package:dart_lang/a_solid/d_interface_segregation/b_post_refactor/subscription_notification_service.dart';

class Subscriber implements SubscriptionNotificationService {
  @override
  void subscribeToMSNotifications() {}

  @override
  void subscribeToNewProductsAvailability() {
    print("subscribing ...");
  }
}
