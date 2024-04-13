import 'package:dart_lang/b_behavioral/b_strategy/other_strategy_implementations/exercise/notification_sending_service.dart';
import 'package:dart_lang/b_behavioral/b_strategy/other_strategy_implementations/exercise/user.dart';

class NotifcationServices {
  final NotificationSendingService notificationSendingService;
  NotifcationServices(this.notificationSendingService);

  void sendNotification(String message, User user) {
    notificationSendingService.sendNotification(message, user);
  }
}
