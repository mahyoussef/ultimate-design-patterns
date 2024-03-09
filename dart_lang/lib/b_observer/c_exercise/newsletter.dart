import 'package:dart_lang/b_observer/c_exercise/exercise.dart';

class Newsletter implements Notifier {
  final String _title;

  const Newsletter({required String title}) : _title = title;
  String get title => _title;

  @override
  String get templateNotifyingMessage =>
      "New newsletter $_title is published...";

  @override
  EventType get eventType => EventType.newsletter;
}
