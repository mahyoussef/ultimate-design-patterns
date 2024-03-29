import { CardType } from "./CardType";
import { InternationalPaymentMethodFactory } from "./InternationalPaymentMethodFactory";
import { PaymentMethodFactory } from "./PaymentMethodFactory";
import { PaymentProcessor } from "./PaymentProcessor";

// Example of usage
const paymentMethodFactory: PaymentMethodFactory =
  new InternationalPaymentMethodFactory();
const paymentProcessor: PaymentProcessor = new PaymentProcessor(
  paymentMethodFactory
);

const exampleCardType: CardType = CardType.VISA;
const exampleAmount: number = 100.0;
const exampleCardHolder: string = "John Doe";
const exampleCardNumber: string = "1234567890123456";
const exampleCvv: string = "123";
const exampleExpiryDate: string = "12/24";

paymentProcessor.processPayment(
  exampleCardType,
  exampleAmount,
  exampleCardHolder,
  exampleCardNumber,
  exampleCvv,
  exampleExpiryDate
);
