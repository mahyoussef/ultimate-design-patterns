package facade;

public class PaymentMethodFactory {

    public PaymentMethod createPaymentMethodOf(String paymentMethod) {
        if (paymentMethod.equalsIgnoreCase(PaymentMethodOptions.VISA.toString())) {
            return new VisaCard();
        }
        if (paymentMethod.equalsIgnoreCase(PaymentMethodOptions.MASTER_CARD.toString())) {
            return new MasterCard();
        }
        if (paymentMethod.equalsIgnoreCase(PaymentMethodOptions.PAYPAL.toString())) {
            return new Paypal();
        }
        throw new UnsupportedOperationException("Card type is not supported");
    }
}
