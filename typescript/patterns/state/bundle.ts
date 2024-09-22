class Order {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }
}

// ########################################

interface OrderState {
  processOrder(): void;
  shipOrder(): void;
  deliverOrder(): void;
  cancelOrder(): void;
}

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

// ########################################

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

// Example usage

const order = new Order("Apple", 100);
const orderManagement = new OrderManagement(order);

orderManagement.processOrder();
orderManagement.shipOrder();
orderManagement.deliverOrder();
orderManagement.cancelOrder();
