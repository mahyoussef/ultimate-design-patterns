class DeliveredOrderState implements OrderState {
  private orderManagement: OrderManagement;

  constructor(orderManagement: OrderManagement) {
    this.orderManagement = orderManagement;
  }

  processOrder(): void {
    console.log(
      `Cannot process the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already delivered.`,
    );
  }

  shipOrder(): void {
    console.log(
      `Cannot ship the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already delivered.`,
    );
  }

  deliverOrder(): void {
    console.log(
      `Order: ${this.orderManagement
        .getOrder()
        .getName()} is already delivered.`,
    );
  }

  cancelOrder(): void {
    console.log(
      `Cannot cancel order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already delivered.`,
    );
  }
}
