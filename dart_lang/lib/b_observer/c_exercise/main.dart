import 'package:dart_lang/b_observer/c_exercise/exercise.dart';

void main() {
  const User ahmed = User(name: "Ahmed");
  // ignore: unused_local_variable
  const User mohammed = User(name: "Mohammed");
  const User mostafa = User(name: "Mostafa");
  const User mahmoud = User(name: "Mahmoud");

  BlogObserver blogObserver = BlogObserver();

  blogObserver.subscribe(EventType.blogPost, ahmed);
  blogObserver.subscribe(EventType.blogPost, mahmoud);
  blogObserver.subscribe(EventType.newsletter, ahmed);
  blogObserver.subscribe(EventType.newsletter, mostafa);

  blogObserver
      .newNotification(const BlogPost(title: "10 reasons to not use IPhone"));
  blogObserver
      .newNotification(const Newsletter(title: "New training information"));
}
