import { LocalPaymentMethod } from "./local-payment-method";

export class Diners extends LocalPaymentMethod {
    constructor(
      cardHolder: string,
      cardNumber: string,
      cvv: string,
      expiryDate: string
    ) {
      super(cardHolder, cardNumber, cvv, expiryDate);
    }
  
    authorizePayment(): void {
      console.log("Authorizing Diners card....");
    }
  
    startMoneyTransfer(): void {
      console.log("Start money transferring for a Diners card....");
    }
  
    calculatePaymentFees(amount: number): void {
      console.log("Calculating Diners card payment fees....");
    }
  }
  