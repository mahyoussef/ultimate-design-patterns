import 'package:dart_lang/b_behavioral/b_strategy/other_strategy_implementations/pricing_strategy.dart';

class RegularPricingStrategy implements PricingStartgy {
  @override
  double calculatePrice(double price) {
    return price;
  }
}
