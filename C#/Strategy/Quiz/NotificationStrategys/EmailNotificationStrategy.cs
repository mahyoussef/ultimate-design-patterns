using dotnet.Strategy.Quiz.Interfaces;

namespace dotnet.Strategy.Quiz.NotificationStrategys;

public class EmailNotificationStrategy : INotificationStrategy
{
    public void SendNotification(string message)
    {
        Console.WriteLine($"Sending Email: {message}");
    }
}