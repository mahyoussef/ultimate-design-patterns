import { PaymentMethod } from "./payment-method-factory";

export abstract class InternationalPaymentMethod implements PaymentMethod {
    private cardHolder: string;
    private cardNumber: string;
    private cvv: string;
    private expiryDate: string;
  
    constructor(
      cardHolder: string,
      cardNumber: string,
      cvv: string,
      expiryDate: string
    ) {
      this.cardHolder = cardHolder;
      this.cardNumber = cardNumber;
      this.cvv = cvv;
      this.expiryDate = expiryDate;
    }
  
    abstract authorizePayment(): void;
    abstract startMoneyTransfer(): void;
    abstract calculatePaymentFees(amount: number): void;
  
    getCardHolder(): string {
      return this.cardHolder;
    }
  
    setCardHolder(cardHolder: string): void {
      this.cardHolder = cardHolder;
    }
  
    getCardNumber(): string {
      return this.cardNumber;
    }
  
    setCardNumber(cardNumber: string): void {
      this.cardNumber = cardNumber;
    }
  
    getCvv(): string {
      return this.cvv;
    }
  
    setCvv(cvv: string): void {
      this.cvv = cvv;
    }
  
    getExpiryDate(): string {
      return this.expiryDate;
    }
  
    setExpiryDate(expiryDate: string): void {
      this.expiryDate = expiryDate;
    }
  }
  