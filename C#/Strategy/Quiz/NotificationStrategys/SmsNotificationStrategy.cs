using Strategy.Quiz.Interfaces;

namespace Strategy.Quiz.NotificationStrategys;

public sealed class SmsNotificationStrategy : INotificationStrategy
{
    public void SendNotification(string message)
        => Console.WriteLine($"Sending SMS: {message}");
}