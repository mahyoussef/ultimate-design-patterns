import 'package:dart_lang/b_observer/a_naive_solution/observer.dart';

class OnlineMarketPlace {
  List<User> _users;
  List<Product> _products;
  List<Offer> _offers;

  OnlineMarketPlace()
      : _users = [],
        _products = [],
        _offers = [];

  void addUser(User user) {
    _users.add(user);
  }

  void addProduct(Product product) {
    _products.add(product);
    notifyUsersProduct(product);
  }

  void addOffer(Offer offer) {
    _offers.add(offer);
    notifyUsersOffer(offer);
  }

  void notifyUsersProduct(Product product) {
    for (var user in _users) {
      if (user.isSubscribedOnProducts) {
        user.notifyProduct(product);
      }
    }
  }

  void notifyUsersOffer(Offer offer) {
    for (var user in _users) {
      if (user.isSubscribedOnOffers) {
        user.notifyOffer(offer);
      }
    }
  }
}
