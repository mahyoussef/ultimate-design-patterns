import 'package:Strategy_design/behavioral/strategy/pricing_strategy.dart';

class PremiumPricingStrategy implements PricingStartgy {
  @override
  double calculatePrice(double price) {
    return price * 0.8; // 20% discount
  }
}
