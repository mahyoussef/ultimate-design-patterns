class ShippedOrderState implements OrderState {
  private orderManagement: OrderManagement;

  constructor(orderManagement: OrderManagement) {
    this.orderManagement = orderManagement;
  }

  processOrder(): void {
    console.log(
      `Cannot process the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already shipped.`,
    );
  }

  shipOrder(): void {
    console.log(
      `Order: ${this.orderManagement
        .getOrder()
        .getName()} is currently being shipping.`,
    );
  }

  deliverOrder(): void {
    console.log("Delivering order...");
    this.orderManagement.changeState(
      new DeliveredOrderState(this.orderManagement),
    );
  }

  cancelOrder(): void {
    console.log(
      `Cannot cancel the order: ${this.orderManagement
        .getOrder()
        .getName()} because it is already delivered.`,
    );
  }
}
