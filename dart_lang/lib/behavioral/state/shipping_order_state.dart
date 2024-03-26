import 'package:Strategy_design/behavioral/state/delever_order_state.dart';
import 'package:Strategy_design/behavioral/state/order_managment.dart';
import 'package:Strategy_design/behavioral/state/order_state.dart';

class ShippingOrderState implements OrderState {
  final OrderManagement orderManagement;
  ShippingOrderState(this.orderManagement);
  @override
  void cancelOrder() {
    print('cannot cancel the order at this state');
  }

  @override
  void deliverdOrder() {
    print('Order is delivered');
    orderManagement.changeState(DeleverdOrderState(orderManagement));
  }

  @override
  void processOrder() {
    print(
        'can not process the Order  ${orderManagement.orderModel.name} is  being procccing now ');
  }

  @override
  void shipOrder() {
    print('Order is being shipped');
  }
}
