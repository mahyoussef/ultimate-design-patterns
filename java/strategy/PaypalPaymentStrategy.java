package strategy;

public class PaypalPaymentStrategy implements PaymentStrategy {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing payment of paypal...");
        System.out.println("Calculating fees of the amount" + amount + "for paypal...");
    }
}
