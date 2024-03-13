import 'package:dart_lang/c_strategy/c_exercise/notification_strategy/notification_strategy_inteface.dart';
import 'package:dart_lang/c_strategy/c_exercise/user.dart';

class EmailNotificationStrategy implements NotificationStrategy {
  @override
  void sendNotification(User user, String message) {
    print("sending Email... ");
  }
}
