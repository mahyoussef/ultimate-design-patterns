import 'package:dart_lang/b_behavioral/h_state/order_managment.dart';
import 'package:dart_lang/b_behavioral/h_state/order_state.dart';

class DeleverdOrderState implements OrderState {
  OrderManagement orderManagement;
  DeleverdOrderState(this.orderManagement);

  @override
  void cancelOrder() {
    print('can not cancel the order at this state');
  }

  @override
  void deliverdOrder() {
    print('Order is delivered....');
  }

  @override
  void processOrder() {
    print('can not process the Order at this state');
  }

  @override
  void shipOrder() {
    print('can not ship the Order at this state');
  }
}
