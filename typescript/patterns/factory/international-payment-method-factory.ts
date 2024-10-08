import { CardType } from "./card-type";
import { MasterCard } from "./MasterCard";
import { PaymentMethod, PaymentMethodFactory } from "./payment-method-factory";
import { Visa } from "./Visa";
import { AmericanExpress } from "./american-express";

export class InternationalPaymentMethodFactory implements PaymentMethodFactory {
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