package factory;

public class InternationalPaymentMethodFactory implements PaymentMethodFactory {

    public PaymentMethod createPaymentMethod(CardType cardType, String cardHolder, String cardNumber,
                                                          String cvv, String expiryDate) {
        if (cardType == CardType.VISA) {
            return new Visa(cardHolder, cardNumber, cvv, expiryDate);
        }
        if (cardType == CardType.MASTER_CARD) {
            return new MasterCard(cardHolder, cardNumber, cvv, expiryDate);
        }
        if (cardType == CardType.AMERICAN_EXPRESS) {
            return new AmericanExpress(cardHolder, cardNumber, cvv, expiryDate);
        }
        throw new IllegalArgumentException("Card type is not supported...");
    }
}
