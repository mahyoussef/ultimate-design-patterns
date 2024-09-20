import { CardType } from "./CardType";

export interface PaymentMethod {
  authorizePayment(): void;
  startMoneyTransfer(): void;
  calculatePaymentFees(amount: number): void;
}

export interface PaymentMethodFactory {
  createPaymentMethod(
    cardType: CardType,
    cardHolder: string,
    cardNumber: string,
    cvv: string,
    expiryDate: string
  ): PaymentMethod;
}
