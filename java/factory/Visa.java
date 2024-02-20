package factory;

public class Visa extends InternationalPaymentMethod {

    public Visa(String cardHolder, String cardNumber, String cvv, String expiryDate) {
        super(cardHolder, cardNumber, cvv, expiryDate);
    }

    @Override
    public void authorizePayment() {
        System.out.println("Authorizing visa card....");
    }

    @Override
    public void startMoneyTransfer() {
        System.out.println("Start money transferring for a visa card....");
    }

    @Override
    public void calculatePaymentFees(double amount) {
        System.out.println("Calculating visa card payment fees....");
    }
}
