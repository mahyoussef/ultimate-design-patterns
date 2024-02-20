package factory;

public class CarteBancaire extends LocalPaymentMethod {

    public CarteBancaire(String cardHolder, String cardNumber, String cvv, String expiryDate) {
        super(cardHolder, cardNumber, cvv, expiryDate);
    }

    @Override
    public void authorizePayment() {
        System.out.println("Authorizing Carte Bancaire card....");
    }

    @Override
    public void startMoneyTransfer() {
        System.out.println("Start money transferring for a Carte Bancaire card....");
    }

    @Override
    public void calculatePaymentFees(double amount) {
        System.out.println("Calculating Carte Bancaire card payment fees....");
    }
}
