package strategy;

public class BankTransferPaymentStrategy implements PaymentStrategy {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing payment of bank transfer...");
    }
}
