import 'package:dart_lang/b_behavioral/strategy/exercise/notification_sending_service.dart';
import 'package:dart_lang/b_behavioral/strategy/exercise/user.dart';

class SendSms implements NotificationSendingService {
  @override
  void sendNotification(String message, User user) {
    print('sending $message to ${user.mobileNumber}');
  }
}
