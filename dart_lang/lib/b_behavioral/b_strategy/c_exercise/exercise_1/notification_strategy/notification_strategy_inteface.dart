import 'package:dart_lang/b_behavioral/b_strategy/c_exercise/exercise_1/user.dart';

abstract class NotificationStrategy {
  void sendNotification(User user, String message);
}
