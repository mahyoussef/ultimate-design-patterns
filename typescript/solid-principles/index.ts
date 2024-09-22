import { Order } from "./Order";
import { PaymentProcessor } from "./payment-processor";
import { VisaPaymentStrategy } from "./visa-paymentStrategy";

const paymentProcessor: PaymentProcessor = new PaymentProcessor(
  new VisaPaymentStrategy()
);
paymentProcessor.processPayment(new Order("OrderNo", 10));
