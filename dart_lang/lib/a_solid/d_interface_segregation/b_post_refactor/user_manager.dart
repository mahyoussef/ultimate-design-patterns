
import 'customer.dart';

abstract class UserManager {
  void updateUserProfile(Customer customer);
  void changePassword(Customer customer, String newPassword);
}
