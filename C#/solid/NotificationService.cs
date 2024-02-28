using System;

namespace Solid
{
    public class NotificationService
    {
        public void SendEmailNotification(Customer customer, string message)
        {
            Console.WriteLine($"Sending email notification to: {customer.Email} with message: {message}");
        }
    }
}
