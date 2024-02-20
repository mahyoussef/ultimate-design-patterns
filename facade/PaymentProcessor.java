package facade;

public class PaymentProcessor {

    public void processPayment(double amount, PaymentMethod paymentMethod) {
        System.out.println("Processing the overall payment with amount: " + amount + " using: "
                + paymentMethod.getType());
    }

}
