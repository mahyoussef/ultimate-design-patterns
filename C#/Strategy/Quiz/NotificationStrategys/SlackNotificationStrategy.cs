using Strategy.Quiz.Interfaces;

namespace Strategy.Quiz.NotificationStrategys;

public sealed class SlackNotificationStrategy : INotificationStrategy
{
    public void SendNotification(string message)
        => Console.WriteLine($"Sending Slack: {message}");
}