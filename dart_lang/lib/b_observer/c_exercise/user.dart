import 'package:dart_lang/b_observer/c_exercise/exercise.dart';

class User implements Subscriber {
  final String _name;

  const User({required String name}) : _name = name;

  @override
  void notify(String message) {
    print("Hey $_name, you need to read this message: $message");
  }
}
