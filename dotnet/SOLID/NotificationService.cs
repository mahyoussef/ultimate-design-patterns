using dotnet.SOLID.Models;

namespace dotnet.SOLID;

public class NotificationService
{
    internal void SendEmailNotification(Customer customer, string message) {
        Console.WriteLine("Sending email to " + customer.Email + " with message: " + message);
    }
}