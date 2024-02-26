import { InternationalPaymentMethod } from "./InternationalPaymentMethod";

export class MasterCard extends InternationalPaymentMethod {
    constructor(
      cardHolder: string,
      cardNumber: string,
      cvv: string,
      expiryDate: string
    ) {
      super(cardHolder, cardNumber, cvv, expiryDate);
    }
  
    authorizePayment(): void {
      console.log("Authorizing master card....");
    }
  
    startMoneyTransfer(): void {
      console.log("Start money transferring for a master card....");
    }
  
    calculatePaymentFees(amount: number): void {
      console.log("Calculating master card payment fees....");
    }
  }