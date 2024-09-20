import { Order } from "./Order";

class OrderManagement {

    processOrder(order: Order): void {
        console.log("Processing order: " + order.getName() + " now...");
    }

}