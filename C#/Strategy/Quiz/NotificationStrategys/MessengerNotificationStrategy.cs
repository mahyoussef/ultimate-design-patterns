using Strategy.Quiz.Interfaces;

namespace Strategy.Quiz.NotificationStrategys;

public sealed class MessengerNotificationStrategy : INotificationStrategy
{
    public void SendNotification(string message)
        => Console.WriteLine($"Sending Messenger: {message}");
}