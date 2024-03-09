import 'package:dart_lang/b_observer/c_exercise/exercise.dart';

class BlogPost implements Notifier {
  final String _title;

  const BlogPost({required String title}) : _title = title;
  String get title => _title;

  @override
  String get templateNotifyingMessage => "New blog $_title is published...";

  @override
  EventType get eventType => EventType.blogPost;
}
