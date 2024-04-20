import 'package:dart_lang/b_behavioral/b_strategy/other_strategy_implementations/exercise/user.dart';

abstract class NotificationSendingService {
  void sendNotification(String message, User user);
}
