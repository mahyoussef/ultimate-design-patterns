class Order {
  String? _name;
  double _price;

  Order(String? name, double price)
      : _name = name,
        _price = price;

  String? get name => _name;
  double get price => _price;
}
