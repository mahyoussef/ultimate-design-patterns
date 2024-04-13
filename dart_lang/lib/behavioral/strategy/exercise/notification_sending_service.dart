import 'package:dart_lang/behavioral/strategy/exercise/user.dart';

abstract class NotificationSendingService {
  void sendNotification(String message, User user);
}
