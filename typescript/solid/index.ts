import { Order } from "./Order";
import { PaymentProcessor } from "./PaymentProcessor";
import { VisaPaymentStrategy } from "./VisaPaymentStrategy";

const paymentProcessor: PaymentProcessor = new PaymentProcessor(
  new VisaPaymentStrategy()
);
paymentProcessor.processPayment(new Order("OrderNo", 10));
