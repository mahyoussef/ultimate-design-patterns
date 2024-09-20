class ProcessingOrderState implements OrderState {
  private orderManagement: OrderManagement;

  constructor(orderManagement: OrderManagement) {
    this.orderManagement = orderManagement;
  }

  processOrder(): void {
    console.log(
      `Cannot process the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already processed.`,
    );
  }

  shipOrder(): void {
    console.log(
      `Shipping order: ${this.orderManagement.getOrder().getName()} ...`,
    );
    this.orderManagement.changeState(
      new ShippedOrderState(this.orderManagement),
    );
  }

  deliverOrder(): void {
    console.log(
      `Cannot deliver the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already processed.`,
    );
  }

  cancelOrder(): void {
    console.log(
      `Cancelling order: ${this.orderManagement.getOrder().getName()} ...`,
    );
    this.orderManagement.changeState(
      new CancelledOrderState(this.orderManagement),
    );
  }
}
