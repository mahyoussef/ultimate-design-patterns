import { InternationalPaymentMethod } from "./international-payment-method";

export class AmericanExpress extends InternationalPaymentMethod {
    constructor(
      cardHolder: string,
      cardNumber: string,
      cvv: string,
      expiryDate: string
    ) {
      super(cardHolder, cardNumber, cvv, expiryDate);
    }
  
    authorizePayment(): void {
      console.log("Authorizing American Express card....");
    }
  
    startMoneyTransfer(): void {
      console.log("Start money transferring for an American Express card....");
    }
  
    calculatePaymentFees(amount: number): void {
      console.log("Calculating American Express card payment fees....");
    }
  }