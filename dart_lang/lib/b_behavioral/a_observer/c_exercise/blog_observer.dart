import 'package:dart_lang/b_behavioral/a_observer/c_exercise/exercise.dart';

class BlogObserver {
  final Map<EventType, List<Subscriber>> _subscribers;
  final Map<EventType, List<Notifier>> _notifiers;

  BlogObserver()
      : _subscribers = {},
        _notifiers = {} {
    _initBlogMaps<Subscriber>(_subscribers);
    _initBlogMaps<Notifier>(_notifiers);
  }

  void _initBlogMaps<T>(Map<EventType, List<T>> mp) {
    for (EventType type in EventType.values) {
      mp[type] = <T>[];
    }
  }

  void subscribe(EventType eventType, Subscriber subscriber) {
    _subscribers[eventType]!.add(subscriber);
  }

  void unSubscribe(EventType eventType, Subscriber subscriber) {
    _subscribers[eventType]!.remove(subscriber);
  }

  void notifySubscribers(EventType eventType, String message) {
    for (Subscriber subscriber in _subscribers[eventType]!) {
      subscriber.notify(message);
    }
  }

  void newNotification(Notifier notifier) {
    _notifiers[notifier.eventType]!.add(notifier);
    notifySubscribers(notifier.eventType, notifier.templateNotifyingMessage);
  }
}
