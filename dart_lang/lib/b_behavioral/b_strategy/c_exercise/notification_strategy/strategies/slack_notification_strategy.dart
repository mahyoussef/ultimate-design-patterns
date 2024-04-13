import 'package:dart_lang/b_behavioral/b_strategy/c_exercise/notification_strategy/notification_strategy_inteface.dart';
import 'package:dart_lang/b_behavioral/b_strategy/c_exercise/user.dart';

class SlackNotificationStrategy implements NotificationStrategy {
  @override
  void sendNotification(User user, String message) {
    print("sending on Slack... ");
  }
}
