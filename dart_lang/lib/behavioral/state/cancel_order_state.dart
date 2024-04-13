import 'package:dart_lang/behavioral/state/order_managment.dart';
import 'package:dart_lang/behavioral/state/order_state.dart';

class CancelOrderState implements OrderState {
  final OrderManagement orderManagement;
  CancelOrderState(this.orderManagement);
  @override
  void cancelOrder() {
    print('Order is Canceled');
  }

  @override
  void deliverdOrder() {
    // print('Order is delivered');
    print('can not deliver  ${orderManagement.orderModel.name} at this state');
  }

  @override
  void processOrder() {
    print(
        'can not process the Order  ${orderManagement.orderModel.name} is  being procccing now ');
  }

  @override
  void shipOrder() {
    print('can not ship  ${orderManagement.orderModel.name} at this state');
  }
}
