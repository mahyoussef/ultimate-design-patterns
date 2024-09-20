import { LocalPaymentMethod } from "./local-payment-method";

export class CarteBancaire extends LocalPaymentMethod {
    constructor(
      cardHolder: string,
      cardNumber: string,
      cvv: string,
      expiryDate: string
    ) {
      super(cardHolder, cardNumber, cvv, expiryDate);
    }
  
    authorizePayment(): void {
      console.log("Authorizing Carte Bancaire card....");
    }
  
    startMoneyTransfer(): void {
      console.log("Start money transferring for a Carte Bancaire card....");
    }
  
    calculatePaymentFees(amount: number): void {
      console.log("Calculating Carte Bancaire card payment fees....");
    }
  }