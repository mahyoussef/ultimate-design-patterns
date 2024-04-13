import 'package:dart_lang/b_behavioral/strategy/exercise/user.dart';

abstract class NotificationSendingService {
  void sendNotification(String message, User user);
}
