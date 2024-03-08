using Strategy.Quiz.Interfaces;

namespace Strategy.Quiz.NotificationStrategys;

public sealed class EmailNotificationStrategy : INotificationStrategy
{
    public void SendNotification(string message)
        => Console.WriteLine($"Sending Email: {message}");
}