import 'package:dart_lang/b_behavioral/b_strategy/c_exercise/exercise_2/message_formatter_strategy/message_formatter_strategy.dart';

class MessageFormatterContext{
  late MessageFormatterStrategy _messageFormatter;

  String formatMessage(String message){
    return _messageFormatter.formatMessage(message);
  }

  set formatter(MessageFormatterStrategy strategy) => _messageFormatter = strategy;
  MessageFormatterStrategy get formatType => _messageFormatter;
}