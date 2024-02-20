package factory;

public class Diners extends LocalPaymentMethod {

    public Diners(String cardHolder, String cardNumber, String cvv, String expiryDate) {
        super(cardHolder, cardNumber, cvv, expiryDate);
    }

    @Override
    public void authorizePayment() {
        System.out.println("Authorizing Diners card....");
    }

    @Override
    public void startMoneyTransfer() {
        System.out.println("Start money transferring for a Diners card....");
    }

    @Override
    public void calculatePaymentFees(double amount) {
        System.out.println("Calculating Diners card payment fees....");
    }
}
