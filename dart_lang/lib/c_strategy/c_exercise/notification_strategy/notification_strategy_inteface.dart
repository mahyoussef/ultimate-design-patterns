import 'package:dart_lang/c_strategy/c_exercise/user.dart';

abstract class NotificationStrategy {
  void sendNotification(User user, String message);
}
