using dotnet.Strategy.Quiz.Interfaces;

namespace dotnet.Strategy.Quiz.NotificationStrategys;

public class SlackNotificationStrategy : INotificationStrategy
{
    public void SendNotification(string message)
    {
        Console.WriteLine($"Sending Slack: {message}");
    }
}