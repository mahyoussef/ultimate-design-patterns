namespace dotnet.Strategy.Quiz.Interfaces;

public interface INotificationStrategy
{
    void SendNotification(string message);
}