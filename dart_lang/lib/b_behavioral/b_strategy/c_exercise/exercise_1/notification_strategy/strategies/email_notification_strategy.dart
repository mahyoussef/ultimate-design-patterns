import 'package:dart_lang/b_behavioral/b_strategy/c_exercise/exercise_1/notification_strategy/notification_strategy_inteface.dart';
import 'package:dart_lang/b_behavioral/b_strategy/c_exercise/exercise_1/user.dart';

class EmailNotificationStrategy implements NotificationStrategy {
  @override
  void sendNotification(User user, String message) {
    print("sending Email... ");
  }
}
