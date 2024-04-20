import 'package:dart_lang/b_behavioral/b_strategy/other_strategy_implementations/exercise/notification_sending_service.dart';
import 'package:dart_lang/b_behavioral/b_strategy/other_strategy_implementations/exercise/user.dart';

class SendSms implements NotificationSendingService {
  @override
  void sendNotification(String message, User user) {
    print('sending $message to ${user.mobileNumber}');
  }
}
