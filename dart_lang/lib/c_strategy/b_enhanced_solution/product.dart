import 'package:dart_lang/c_strategy/b_enhanced_solution/pricing_strategy/pricing_strategy_interface.dart';

class Product {
  final String _name;
  final double _price;
  final PricingStrategy _pricingStrategy;

  const Product(
      {required String name,
      required double price,
      required PricingStrategy pricingStrategy})
      : _name = name,
        _price = price,
        _pricingStrategy = pricingStrategy;

  String get name => _name;
  double get price => _price;

  double calculatePrice() {
    return _pricingStrategy.calculatePrice(_price);
  }
}
