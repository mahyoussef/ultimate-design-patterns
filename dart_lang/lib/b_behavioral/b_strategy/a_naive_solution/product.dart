import 'package:dart_lang/b_behavioral/b_strategy/a_naive_solution/membership_type.dart';

class Product {
  final String _name;
  final double _price;

  const Product({required String name, required double price})
      : _name = name,
        _price = price;

  String get name => _name;
  double get price => _price;

  double calculatePrice(MembershipType membershipType) {
    if (membershipType == MembershipType.regular) {
      return price;
    } else if (membershipType == MembershipType.gold) {
      return price * .9;
    } else if (membershipType == MembershipType.premium) {
      return price * .8;
    }
    return price;
  }
}
