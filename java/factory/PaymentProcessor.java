package factory;

public class PaymentProcessor {

    private final PaymentMethodFactory paymentMethodFactory;

    public PaymentProcessor(PaymentMethodFactory paymentMethodFactory) {
        this.paymentMethodFactory = paymentMethodFactory;
    }

    public void processPayment(CardType cardType, double amount, String cardHolder, String cardNumber,
                               String cvv, String expiryDate) {
        // logic of create the real card + processing
        PaymentMethod paymentMethod = paymentMethodFactory.createPaymentMethod(cardType,
                cardHolder, cardNumber, cvv, expiryDate);

        paymentMethod.authorizePayment();
        paymentMethod.startMoneyTransfer();
        paymentMethod.calculatePaymentFees(amount);
    }
}
