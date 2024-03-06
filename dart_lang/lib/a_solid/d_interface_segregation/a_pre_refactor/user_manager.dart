import 'package:dart_lang/a_solid/d_interface_segregation/a_pre_refactor/customer.dart';

abstract class UserManager {
  void subscribeToNewProductsAvailability();
  void subscribeToMSNotifications();
  void updateUserProfile(Customer customer);
  void changePassword(Customer customer, String newPassword);
}
