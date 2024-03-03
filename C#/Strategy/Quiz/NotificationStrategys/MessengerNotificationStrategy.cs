using dotnet.Strategy.Quiz.Interfaces;

namespace dotnet.Strategy.Quiz.NotificationStrategys;

public class MessengerNotificationStrategy : INotificationStrategy
{
    public void SendNotification(string message)
    {
        Console.WriteLine($"Sending Messenger: {message}");
    }
}