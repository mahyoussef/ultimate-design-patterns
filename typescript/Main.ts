import { Order } from "./solid/Order";
import { PaymentProcessor } from "./solid/PaymentProcessor";
import { VisaPaymentStrategy } from "./solid/VisaPaymentStrategy";

class Main {
    main() {
        const paymentProcessor: PaymentProcessor = new PaymentProcessor(new VisaPaymentStrategy());
        paymentProcessor.processPayment(new Order("OrderNo", 10));
    }
}

const mainInstance = new Main();
mainInstance.main();