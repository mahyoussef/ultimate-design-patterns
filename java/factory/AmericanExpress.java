package factory;

public class AmericanExpress extends InternationalPaymentMethod {
    public AmericanExpress(String cardHolder, String cardNumber, String cvv, String expiryDate) {
        super(cardHolder, cardNumber, cvv, expiryDate);
    }

    @Override
    public void authorizePayment() {
        System.out.println("Authorizing american express card....");
    }

    @Override
    public void startMoneyTransfer() {
        System.out.println("Start money transferring for a american express card....");
    }

    @Override
    public void calculatePaymentFees(double amount) {
        System.out.println("Calculating american express card payment fees....");
    }
}
