package factory;

public class LocalPaymentMethodFactory implements PaymentMethodFactory {
    @Override
    public PaymentMethod createPaymentMethod(CardType cardType, String cardHolder, String cardNumber,
                                             String cvv, String expiryDate) {
        if (cardType == CardType.DINERS) {
            return new Diners(cardHolder, cardNumber, cvv, expiryDate);
        }
        if (cardType == CardType.CARTE_BANCAIRE) {
            return new CarteBancaire(cardHolder, cardNumber, cvv, expiryDate);
        }
        throw new IllegalArgumentException("Card type not supported...");
    }
}
