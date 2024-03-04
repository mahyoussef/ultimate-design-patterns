package strategy.exercise.exercise1;

public class NotificationService implements NotificationSendingService {

    private final NotificationSendingService notificationSendingService;

    public NotificationService(NotificationSendingService notificationSendingService) {
        this.notificationSendingService = notificationSendingService;
    }

    public void sendNotification(User user, String message) {
        notificationSendingService.sendNotification(user, message);
    }
}
