package solid;

public class VisaPaymentStrategy implements PaymentStrategy {

    @Override
    public void processPayment(double amount) {
        System.out.println("Processing visa card payments...");
    }
}
