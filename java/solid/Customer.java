package solid;

public class Customer implements UserManagement, SubscriptionNotificationService {

    private String name;
    private String email;

    public Customer(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public void subscribeToNewProductsAvailability() {
        System.out.println("Subscribing to new products availability...");
    }

    @Override
    public void subscribeToSMSNotifications() {
        System.out.println("Subscribing to new products availability...");
    }

    @Override
    public void updateUserProfile(Customer customer) {
        System.out.println("Updating user profile + " + customer.getName() + "...");
    }

    @Override
    public void changePassword(Customer customer, String newPassword) {
        System.out.println("Updating user: " + customer.getName() + "...");
    }
}
