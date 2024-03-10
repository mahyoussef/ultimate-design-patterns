import 'package:dart_lang/c_strategy/a_naive_solution/a_naive_solution.dart';

class Checkout {
  const Checkout();

  void processPayment(double price, PaymentMethod paymentMethod) {
    if (paymentMethod == PaymentMethod.bankTransfer) {
      print("processing with price: \$$price");
    } else if (paymentMethod == PaymentMethod.payPal) {
      print("processing with price: \$${price + 200} after \$200 fees.");
    } else if (paymentMethod == PaymentMethod.visaCard) {
      print("processing with price: \$${price + 100} after \$100 fees.");
    }
  }
}
