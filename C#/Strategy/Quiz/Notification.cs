using dotnet.Strategy.Quiz.Interfaces;

namespace dotnet.Strategy.Quiz;

public class Notification
{
    private readonly INotificationStrategy _notificationStrategy;
    
    public Notification(INotificationStrategy notificationStrategy)
    {
        _notificationStrategy = notificationStrategy;
    }
    
    public void SendNotification(string message)
    {
        _notificationStrategy.SendNotification(message);
    }
}