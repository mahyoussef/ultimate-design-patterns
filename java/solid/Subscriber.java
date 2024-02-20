package solid;

public class Subscriber implements SubscriptionNotificationService {
    private String email;

    @Override
    public void subscribeToNewProductsAvailability() {
        System.out.println("Subscribing to new products availability...");
    }

    @Override
    public void subscribeToSMSNotifications() {
        System.out.println("Subscribing to new products availability...");
    }
}
