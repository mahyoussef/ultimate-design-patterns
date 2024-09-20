import { CardType } from "./CardType";
import { PaymentMethod, PaymentMethodFactory } from "./PaymentMethodFactory";

export class PaymentProcessor {
    private readonly paymentMethodFactory: PaymentMethodFactory;
  
    constructor(paymentMethodFactory: PaymentMethodFactory) {
      this.paymentMethodFactory = paymentMethodFactory;
    }
  
    processPayment(
      cardType: CardType,
      amount: number,
      cardHolder: string,
      cardNumber: string,
      cvv: string,
      expiryDate: string
    ): void {
      // Logic to create the real card + processing
      const paymentMethod: PaymentMethod =
        this.paymentMethodFactory.createPaymentMethod(
          cardType,
          cardHolder,
          cardNumber,
          cvv,
          expiryDate
        );
  
      paymentMethod.authorizePayment();
      paymentMethod.startMoneyTransfer();
      paymentMethod.calculatePaymentFees(amount);
    }
  }
  