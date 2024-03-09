using Strategy.Quiz.Interfaces;

namespace Strategy.Quiz;

public sealed class Notification
{
    private readonly INotificationStrategy _notificationStrategy;

    public Notification(INotificationStrategy notificationStrategy)
        => _notificationStrategy = notificationStrategy;

    public void SendNotification(string message)
        => _notificationStrategy.SendNotification(message);
}