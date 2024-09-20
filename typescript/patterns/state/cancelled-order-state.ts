class CancelledOrderState implements OrderState {
  private orderManagement: OrderManagement;

  constructor(orderManagement: OrderManagement) {
    this.orderManagement = orderManagement;
  }

  processOrder(): void {
    console.log(
      `Cannot process the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already cancelled.`,
    );
  }

  shipOrder(): void {
    console.log(
      `Cannot ship the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already cancelled.`,
    );
  }

  deliverOrder(): void {
    console.log(
      `Cannot deliver the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already cancelled.`,
    );
  }

  cancelOrder(): void {
    console.log(
      `Order: ${this.orderManagement
        .getOrder()
        .getName()} is already cancelled.`,
    );
  }
}
