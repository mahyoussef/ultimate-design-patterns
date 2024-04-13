import 'package:dart_lang/behavioral/strategy/exercise/notification_sending_service.dart';
import 'package:dart_lang/behavioral/strategy/exercise/user.dart';

class SendingMail implements NotificationSendingService {
  @override
  void sendNotification(String message, User user) {
    print('sending $message to ${user.email}');
  }
}
