package factory;

public abstract class InternationalPaymentMethod implements PaymentMethod {

    private String cardHolder;
    private String cardNumber;
    private String cvv;
    private String expiryDate;

    public InternationalPaymentMethod(String cardHolder, String cardNumber, String cvv, String expiryDate) {
        this.cardHolder = cardHolder;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }

    public abstract void authorizePayment();
    public abstract void startMoneyTransfer();
    public abstract void calculatePaymentFees(double amount);

    public String getCardHolder() {
        return cardHolder;
    }

    public void setCardHolder(String cardHolder) {
        this.cardHolder = cardHolder;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }
}
