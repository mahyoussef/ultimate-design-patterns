import { Order } from "./Order";
import { Payment } from "./Payment";
import { PaymentStrategy } from "./PaymentStrategy";

export class PaymentProcessor {

    private paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    processPayment(order: Order): void {
        console.log("Processing payment of order: " + order.getName());
        console.log("Issuing payment for amount: " + order.getPrice());
        this.paymentStrategy.processPayment(order.getPrice());
    }

}