import 'package:dart_lang/c_strategy/b_enhanced_solution/pricing_strategy/pricing_strategy_interface.dart';

class RegularPricingStrategy implements PricingStrategy {
  const RegularPricingStrategy();
  @override
  double calculatePrice(double price) {
    return price;
  }
}
