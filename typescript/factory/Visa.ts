import { InternationalPaymentMethod } from "./international-payment-method";

export class Visa extends InternationalPaymentMethod {
    constructor(
      cardHolder: string,
      cardNumber: string,
      cvv: string,
      expiryDate: string
    ) {
      super(cardHolder, cardNumber, cvv, expiryDate);
    }
  
    authorizePayment(): void {
      console.log("Authorizing Visa card....");
    }
  
    startMoneyTransfer(): void {
      console.log("Start money transferring for a Visa card....");
    }
  
    calculatePaymentFees(amount: number): void {
      console.log("Calculating Visa card payment fees....");
    }
  }