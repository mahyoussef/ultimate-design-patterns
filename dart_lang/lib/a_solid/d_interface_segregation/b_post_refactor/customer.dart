import 'package:dart_lang/a_solid/d_interface_segregation/b_post_refactor/subscription_notification_service.dart';
import 'package:dart_lang/a_solid/d_interface_segregation/b_post_refactor/user_manager.dart';

class Customer implements UserManager, SubscriptionNotificationService {
  String? _name;
  String? _email;

  Customer(String name) : _name = name;

  String? get email => _email;
  String? get name => _name;

  @override
  void changePassword(Customer customer, String newPassword) {
    print("Changing password...");
  }

  @override
  void subscribeToMSNotifications() {
    print("Notifying password...");
  }

  @override
  void subscribeToNewProductsAvailability() {
    print("subscribing...");
  }

  @override
  void updateUserProfile(Customer customer) {
    print("updating...");
  }
}
