import { CardType } from "./CardType";
import { CarteBancaire } from "./CarteBancaire";
import { Diners } from "./Diners";
import { PaymentMethod, PaymentMethodFactory } from "./PaymentMethodFactory";

export class LocalPaymentMethodFactory implements PaymentMethodFactory {
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