class Product {
  String _name;
  double _price;

  Product({required String name, required double price})
      : _name = name,
        _price = price;

  double get price => _price;

  String get name => _name;
}
