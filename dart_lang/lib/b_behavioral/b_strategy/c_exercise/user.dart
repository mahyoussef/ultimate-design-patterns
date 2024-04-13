class User {
  final String _name;
  final String _phone;
  final String _email;

  const User(
      {required String name, required String phone, required String email})
      : _name = name,
        _phone = phone,
        _email = email;

  String get name => _name;
  String get phone => _phone;
  String get email => _email;
}
