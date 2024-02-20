package solid;

public class PaymentProcessor {

    private final PaymentStrategy paymentStrategy;

    public PaymentProcessor(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public void processPayment(Order order) {
        System.out.println("Processing payment of order: " + order.getName());
        System.out.println("Issuing payment for amount: " + order.getPrice());
        paymentStrategy.processPayment(order.getPrice());
    }

}
