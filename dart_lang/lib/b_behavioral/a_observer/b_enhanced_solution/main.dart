import 'package:dart_lang/b_behavioral/a_observer/b_enhanced_solution/observer.dart';
import 'package:dart_lang/b_behavioral/a_observer/b_enhanced_solution/online_marketplace.dart';

void main() {
  OnlineMarketPlace onlineMarketPlace = OnlineMarketPlace();

  Subscriber ahmed = Customer(name: "Ahmed");
  Subscriber mahmoud = Customer(name: "Mahmoud");
  Subscriber youssef = Customer(name: "Youssef");
  // ignore: unused_local_variable
  Subscriber mostafa = Customer(name: "Mostafa");

  onlineMarketPlace.subscribe(ahmed, EventType.newProduct);
  onlineMarketPlace.subscribe(ahmed, EventType.newOffer);
  onlineMarketPlace.subscribe(mahmoud, EventType.newOffer);
  onlineMarketPlace.subscribe(youssef, EventType.newProduct);

  onlineMarketPlace.addProduct(Product(name: "Mobile", price: 1000));
  onlineMarketPlace
      .addOffer(Offer(message: "New offer with 20% discount for every item."));
}
