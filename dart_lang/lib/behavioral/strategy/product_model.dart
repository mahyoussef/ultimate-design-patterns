import 'package:dart_lang/behavioral/strategy/pricing_strategy.dart';

class Product {
  String name;
  double price;
  final PricingStartgy pricingStartgy;

  Product(this.name, this.price, this.pricingStartgy);
  double calcProductPrice() {
    return pricingStartgy.calculatePrice(price);
  }
}
