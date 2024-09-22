class OrderManagement {
  private order: Order;

  private orderState: OrderState;

  constructor(order: Order) {
    this.order = order;
    this.orderState = new NewOrderState(this);
  }

  changeState(newState: OrderState): void {
    this.orderState = newState;
  }

  processOrder(): void {
    this.orderState.processOrder();
  }

  shipOrder(): void {
    this.orderState.shipOrder();
  }

  deliverOrder(): void {
    this.orderState.deliverOrder();
  }

  cancelOrder(): void {
    this.orderState.cancelOrder();
  }

  getOrder(): Order {
    return this.order;
  }

  setOrder(order: Order): void {
    this.order = order;
  }
}
