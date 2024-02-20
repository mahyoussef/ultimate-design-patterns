package solid;

public class PaypalPaymentStrategy implements PaymentStrategy {

    @Override
    public void processPayment(double amount) {
        System.out.println("Processing paypal payments...");
    }
}
