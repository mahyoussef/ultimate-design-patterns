import 'package:dart_lang/a_solid/c_liskov_substitution/b_post_refactor/order.dart';
import 'package:dart_lang/a_solid/c_liskov_substitution/b_post_refactor/shipping_cost_calculator.dart';

class DeliveryOrder extends Order implements ShippingCostCalculator {
  static const double SHIPPING_COST = 10.0;

  @override
  double get totalPriceWithShippingCost => price ?? 0 + SHIPPING_COST;
}
