import 'package:dart_lang/b_behavioral/b_strategy/b_enhanced_solution/pricing_strategy/pricing_strategy_interface.dart';

class PremiumPricingStrategy implements PricingStrategy {
  const PremiumPricingStrategy();
  @override
  double calculatePrice(double price) {
    return price * 0.8;
  }
}
