enum CardType {
  VISA,
  MASTER_CARD,
  AMERICAN_EXPRESS,
  DINERS,
  CARTE_BANCAIRE,
}

enum PaymentMethodOptions {
  VISA,
  MASTER_CARD,
  PAYPAL,
}

interface PaymentMethod {
  authorizePayment(): void;
  startMoneyTransfer(): void;
  calculatePaymentFees(amount: number): void;
}

interface PaymentMethodFactory {
  createPaymentMethod(
    cardType: CardType,
    cardHolder: string,
    cardNumber: string,
    cvv: string,
    expiryDate: string
  ): PaymentMethod;
}

abstract class InternationalPaymentMethod implements PaymentMethod {
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
abstract class LocalPaymentMethod implements PaymentMethod {
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

  abstract authorizePayment(): void;

  abstract startMoneyTransfer(): void;

  abstract calculatePaymentFees(amount: number): void;
}

class MasterCard extends InternationalPaymentMethod {
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
class AmericanExpress extends InternationalPaymentMethod {
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
class Visa extends InternationalPaymentMethod {
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

class CarteBancaire extends LocalPaymentMethod {
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
class Diners extends LocalPaymentMethod {
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

class LocalPaymentMethodFactory implements PaymentMethodFactory {
  createPaymentMethod(
    cardType: CardType,
    cardHolder: string,
    cardNumber: string,
    cvv: string,
    expiryDate: string
  ): PaymentMethod {
    if (cardType === CardType.DINERS) {
      return new Diners(cardHolder, cardNumber, cvv, expiryDate);
    }
    if (cardType === CardType.CARTE_BANCAIRE) {
      return new CarteBancaire(cardHolder, cardNumber, cvv, expiryDate);
    }
    throw new Error("Card type not supported...");
  }
}
class InternationalPaymentMethodFactory implements PaymentMethodFactory {
  createPaymentMethod(
    cardType: CardType,
    cardHolder: string,
    cardNumber: string,
    cvv: string,
    expiryDate: string
  ): PaymentMethod {
    if (cardType === CardType.VISA) {
      return new Visa(cardHolder, cardNumber, cvv, expiryDate);
    }
    if (cardType === CardType.MASTER_CARD) {
      return new MasterCard(cardHolder, cardNumber, cvv, expiryDate);
    }
    if (cardType === CardType.AMERICAN_EXPRESS) {
      return new AmericanExpress(cardHolder, cardNumber, cvv, expiryDate);
    }
    throw new Error("Card type is not supported...");
  }
}

class PaymentProcessor {
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
