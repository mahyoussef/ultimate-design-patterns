import 'package:dart_lang/c_strategy/b_enhanced_solution/pricing_strategy/pricing_strategy_interface.dart';

class GoldPricingStrategy implements PricingStrategy {
  const GoldPricingStrategy();
  @override
  double calculatePrice(double price) {
    return price * 0.9;
  }
}
