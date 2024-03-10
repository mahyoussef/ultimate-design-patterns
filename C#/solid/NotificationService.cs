namespace SOLID;

public sealed class NotificationService
{
    public void SendEmailNotification(Customer customer, string message)
        => Console.WriteLine($"Sending email notification to: {customer.Email} with message: {message}");
}
