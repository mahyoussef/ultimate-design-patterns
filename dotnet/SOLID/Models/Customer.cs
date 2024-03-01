using dotnet.SOLID.Interface;

namespace dotnet.SOLID.Models;

public class Customer(string name) : IUserManagement, ISubscriptionNotificationService
{
    public string Name { get; set; } = name;
    public string Email { get; set; } = string.Empty;


    public void UpdateUserProfile(Customer customer)
    {
        Console.WriteLine("Updating user profile for " + customer.Name);
    }

    public void ChangePassword(Customer customer, string newPassword)
    {
        Console.WriteLine("Changing password for " + customer.Name);
    }

    public void SubscribeToNewProductsAvailability()
    {
        Console.WriteLine("Subscribed to new products availability");
    }

    public void SubscribeToSmsNotifications()
    {
        Console.WriteLine("Subscribed to SMS notifications");
    }
}