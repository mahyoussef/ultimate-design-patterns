import 'package:Strategy_design/behavioral/strategy/exercise/user.dart';

abstract class NotificationSendingService {
  void sendNotification(String message, User user);
}
