# Factory Pattern

```mermaid
classDiagram
  interface PaymentMethod {
    + authorizePayment(): void
    + startMoneyTransfer(): void
    + calculatePaymentFees(amount: number): void
  }

  interface PaymentMethodFactory {
    + createPaymentMethod(cardType: CardType, cardHolder: string, cardNumber: string, cvv: string, expiryDate: string): PaymentMethod
  }

  enum CardType {
    VISA
    MASTER_CARD
    AMERICAN_EXPRESS
    DINERS
    CARTE_BANCAIRE
  }

  enum PaymentMethodOptions {
    VISA
    MASTER_CARD
    PAYPAL
  }

  PaymentMethod <|.. InternationalPaymentMethod
  PaymentMethod <|.. LocalPaymentMethod
  PaymentMethodFactory <|.. InternationalPaymentMethodFactory
  PaymentMethodFactory <|.. LocalPaymentMethodFactory

  class InternationalPaymentMethod {
    - cardHolder: string
    - cardNumber: string
    - cvv: string
    - expiryDate: string
    + authorizePayment(): void
    + startMoneyTransfer(): void
    + calculatePaymentFees(amount: number): void
    + getCardHolder(): string
    + setCardHolder(cardHolder: string): void
    + getCardNumber(): string
    + setCardNumber(cardNumber: string): void
    + getCvv(): string
    + setCvv(cvv: string): void
    + getExpiryDate(): string
    + setExpiryDate(expiryDate: string): void
  }

  class LocalPaymentMethod {
    - cardHolder: string
    - cardNumber: string
    - cvv: string
    - expiryDate: string
    + authorizePayment(): void
    + startMoneyTransfer(): void
    + calculatePaymentFees(amount: number): void
    + getCardHolder(): string
    + setCardHolder(cardHolder: string): void
    + getCardNumber(): string
    + setCardNumber(cardNumber: string): void
    + getCvv(): string
    + setCvv(cvv: string): void
    + getExpiryDate(): string
    + setExpiryDate(expiryDate: string): void
  }

  class MasterCard {
    + MasterCard(cardHolder: string, cardNumber: string, cvv: string, expiryDate: string)
    + authorizePayment(): void
    + startMoneyTransfer(): void
    + calculatePaymentFees(amount: number): void
  }

  class AmericanExpress {
    + AmericanExpress(cardHolder: string, cardNumber: string, cvv: string, expiryDate: string)
    + authorizePayment(): void
    + startMoneyTransfer(): void
    + calculatePaymentFees(amount: number): void
  }

  class Visa {
    + Visa(cardHolder: string, cardNumber: string, cvv: string, expiryDate: string)
    + authorizePayment(): void
    + startMoneyTransfer(): void
    + calculatePaymentFees(amount: number): void
  }

  class CarteBancaire {
    + CarteBancaire(cardHolder: string, cardNumber: string, cvv: string, expiryDate: string)
    + authorizePayment(): void
    + startMoneyTransfer(): void
    + calculatePaymentFees(amount: number): void
  }

  class Diners {
    + Diners(cardHolder: string, cardNumber: string, cvv: string, expiryDate: string)
    + authorizePayment(): void
    + startMoneyTransfer(): void
    + calculatePaymentFees(amount: number): void
  }

  class LocalPaymentMethodFactory {
    + createPaymentMethod(cardType: CardType, cardHolder: string, cardNumber: string, cvv: string, expiryDate: string): PaymentMethod
  }

  class InternationalPaymentMethodFactory {
    + createPaymentMethod(cardType: CardType, cardHolder: string, cardNumber: string, cvv: string, expiryDate: string): PaymentMethod
  }

  class PaymentProcessor {
    - paymentMethodFactory: PaymentMethodFactory
    + PaymentProcessor(paymentMethodFactory: PaymentMethodFactory)
    + processPayment(cardType: CardType, amount: number, cardHolder: string, cardNumber: string, cvv: string, expiryDate: string): void
  }

  PaymentProcessor --> PaymentMethodFactory

  
```
