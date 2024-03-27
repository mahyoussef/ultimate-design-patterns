import 'package:Strategy_design/behavioral/strategy/pricing_strategy.dart';

class GoldPricingStartge implements PricingStartgy {
  @override
  double calculatePrice(double price) {
    return price * 0.9;
  }
}
