import 'package:dart_lang/b_behavioral/a_observer/a_naive_solution/observer.dart';

class User {
  String _name;
  bool _isSubscribedOnProducts;
  bool _isSubscribedOnOffers;
  User(
      {required String name,
      required bool isSubscribedOnProducts,
      required bool isSubscribedOnOffers})
      : _name = name,
        _isSubscribedOnProducts = isSubscribedOnProducts,
        _isSubscribedOnOffers = isSubscribedOnOffers;

  String get name => _name;
  bool get isSubscribedOnProducts => _isSubscribedOnProducts;
  bool get isSubscribedOnOffers => _isSubscribedOnOffers;

  void notifyProduct(Product product) {
    print("Notifying $_name about new product: ${product.name}");
  }

  void notifyOffer(Offer offer) {
    print("Notifying $_name about new offer: ${offer.message}");
  }
}
