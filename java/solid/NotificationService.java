package solid;

public class NotificationService {

    void sendEmailNotification(Customer customer, String message) {
        System.out.println("Sending email notification to: " + customer.getEmail()
                + " with message: " + message);
    }
}
