package strategy;

public class VisaCardPaymentStrategy implements PaymentStrategy {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing payment of visa cards...");
        System.out.println("Calculating fees of the amount" + amount + "for visa cards...");
    }
}
