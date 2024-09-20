class NewOrderState implements OrderState {
  private orderManagement: OrderManagement;

  constructor(orderManagement: OrderManagement) {
    this.orderManagement = orderManagement;
  }

  processOrder(): void {
    console.log(
      `Processing order: ${this.orderManagement.getOrder().getName()}...`,
    );

    this.orderManagement.changeState(
      new ProcessingOrderState(this.orderManagement),
    );
  }

  shipOrder(): void {
    console.log(
      `Cannot ship the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is not processed.`,
    );
  }

  deliverOrder(): void {
    console.log(
      `Cannot deliver the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is not processed.`,
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
