import 'package:Strategy_design/behavioral/strategy/exercise/notification_sending_service.dart';
import 'package:Strategy_design/behavioral/strategy/exercise/user.dart';

class SendSms implements NotificationSendingService {
  @override
  void sendNotification(String message, User user) {
    print('sending $message to ${user.mobileNumber}');
  }
}
