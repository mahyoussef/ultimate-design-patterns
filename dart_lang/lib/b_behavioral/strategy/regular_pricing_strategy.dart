import 'package:dart_lang/b_behavioral/strategy/pricing_strategy.dart';

class RegularPricingStrategy implements PricingStartgy {
  @override
  double calculatePrice(double price) {
    return price;
  }
}
