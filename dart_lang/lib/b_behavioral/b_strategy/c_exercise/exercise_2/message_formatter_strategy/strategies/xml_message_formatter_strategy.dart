import 'package:dart_lang/b_behavioral/b_strategy/c_exercise/exercise_2/message_formatter_strategy/message_formatter_strategy_interface.dart';

class XMLMessageFormatterStrategy extends MessageFormatterStrategy {
  @override
  String formatMessage(String message) {
    return "<message>$message</message>";
  }

  @override
  String get type => "XML";
}
