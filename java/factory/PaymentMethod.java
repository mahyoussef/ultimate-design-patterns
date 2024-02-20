package factory;

public interface PaymentMethod {

    void authorizePayment();
    void startMoneyTransfer();
    void calculatePaymentFees(double amount);
}
