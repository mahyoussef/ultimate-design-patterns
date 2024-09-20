import { Order } from "./Order";

class OrderManagment {

    processOrder(order: Order): void {
        console.log("Processing order: " + order.getName() + " now...");
    }

}