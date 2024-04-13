import 'package:dart_lang/b_behavioral/h_state/new_order_state.dart';
import 'package:dart_lang/b_behavioral/h_state/order_model.dart';
import 'package:dart_lang/b_behavioral/h_state/order_state.dart';

class OrderManagement {
  OrderModel orderModel;
  OrderState? orderState;
  OrderManagement({
    required this.orderModel,
  }) {
    orderState = NewOrderState(this);
  }
  void changeState(OrderState changedORderState) {
    orderState = changedORderState;
  }

  void processOrder() {
    orderState!.processOrder();
  }

  void shipOrder() {
    orderState!.shipOrder();
  }

  void deliverdOrder() {
    orderState!.deliverdOrder();
  }

  void cancelOrder() {
    orderState!.cancelOrder();
  }
}

// enum OrderState { newo, pending, processing, shipped, delivered, canceled }
