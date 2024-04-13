import 'package:dart_lang/behavioral/state/cancel_order_state.dart';
import 'package:dart_lang/behavioral/state/order_managment.dart';
import 'package:dart_lang/behavioral/state/order_state.dart';
import 'package:dart_lang/behavioral/state/processing_order_state.dart';

class NewOrderState implements OrderState {
  final OrderManagement orderManagement;
  NewOrderState(this.orderManagement);
  @override
  void cancelOrder() {
    print('Order  ${orderManagement.orderModel.name} is canceled');
    orderManagement.changeState(CancelOrderState(orderManagement));
  }

  @override
  void deliverdOrder() {
    print('can not deliver  ${orderManagement.orderModel.name} at this state');
  }

  @override
  void processOrder() {
    print('Order  ${orderManagement.orderModel.name} is  being procccing now');
    orderManagement.changeState(ProcessingOrderState(orderManagement));
  }

  @override
  void shipOrder() {
    print('can not ship  ${orderManagement.orderModel.name} at this state');
  }
}
