package strategy.exercise;

public class EmailNotificationService implements NotificationSendingService {
    @Override
    public void sendNotification(User user, String message) {
        System.out.println("Sending message: " + message + " to user: " + user.getEmail() );
    }
}
