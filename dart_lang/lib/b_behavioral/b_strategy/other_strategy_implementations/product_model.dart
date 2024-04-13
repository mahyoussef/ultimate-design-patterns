import 'package:dart_lang/b_behavioral/b_strategy/other_strategy_implementations/pricing_strategy.dart';

class Product {
  String name;
  double price;
  final PricingStartgy pricingStartgy;

  Product(this.name, this.price, this.pricingStartgy);
  double calcProductPrice() {
    return pricingStartgy.calculatePrice(price);
  }
}
