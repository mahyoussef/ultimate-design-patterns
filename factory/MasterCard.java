package factory;

public class MasterCard extends InternationalPaymentMethod {
    public MasterCard(String cardHolder, String cardNumber, String cvv, String expiryDate) {
        super(cardHolder, cardNumber, cvv, expiryDate);
    }

    @Override
    public void authorizePayment() {
        System.out.println("Authorizing master card....");
    }

    @Override
    public void startMoneyTransfer() {
        System.out.println("Start money transferring for a master card....");
    }

    @Override
    public void calculatePaymentFees(double amount) {
        System.out.println("Calculating master card payment fees....");
    }
}
