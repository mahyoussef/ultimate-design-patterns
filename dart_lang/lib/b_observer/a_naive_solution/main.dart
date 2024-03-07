import 'package:dart_lang/b_observer/a_naive_solution/observer.dart';
import 'package:dart_lang/b_observer/a_naive_solution/online_marketplace.dart';

void main() {
  final OnlineMarketPlace onlineMarketPlace = OnlineMarketPlace();
  onlineMarketPlace.addUser(User(
      name: "Ahmed", isSubscribedOnProducts: true, isSubscribedOnOffers: true));
  onlineMarketPlace.addUser(User(
      name: "Mahmoud",
      isSubscribedOnProducts: false,
      isSubscribedOnOffers: true));
  onlineMarketPlace.addUser(User(
      name: "Youssef",
      isSubscribedOnProducts: true,
      isSubscribedOnOffers: false));
  onlineMarketPlace.addUser(User(
      name: "Mostafa",
      isSubscribedOnProducts: false,
      isSubscribedOnOffers: false));

  onlineMarketPlace.addProduct(Product(name: "Mobile", price: 1000));
  onlineMarketPlace
      .addOffer(Offer(message: "New offer with 20% discount for every item."));
}
