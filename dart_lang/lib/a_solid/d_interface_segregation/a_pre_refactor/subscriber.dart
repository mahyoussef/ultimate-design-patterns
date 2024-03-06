import 'package:dart_lang/a_solid/d_interface_segregation/a_pre_refactor/customer.dart';
import 'package:dart_lang/a_solid/d_interface_segregation/a_pre_refactor/user_manager.dart';

class Subscriber implements UserManager {
  @override
  void changePassword(Customer customer, String newPassword) {}

  @override
  void subscribeToMSNotifications() {}

  @override
  void subscribeToNewProductsAvailability() {
    print("subscribing ...");
  }

  @override
  void updateUserProfile(Customer customer) {
    print("updating");
  }
}
