package strategy.exercise;

public class NotificationService implements NotificationSendingService {

    private final NotificationSendingService notificationSendingService;

    public NotificationService(NotificationSendingService notificationSendingService) {
        this.notificationSendingService = notificationSendingService;
    }

    public void sendNotification(User user, String message) {
        notificationSendingService.sendNotification(user, message);
    }
}
