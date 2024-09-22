import { CardType } from "./card-type";
import { InternationalPaymentMethodFactory } from "./international-payment-method-factory";
import { PaymentMethodFactory } from "./payment-method-factory";
import { PaymentProcessor } from "./payment-processor";

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
