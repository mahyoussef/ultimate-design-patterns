namespace SOLID;

public sealed class Customer : IUserManagement, ISubscriptionNotificationService
{
    public string Name { get; }
    public string? Email { get; }
    
    public Customer(string name)
    {
        Name = name;
    }

    public void SubscribeToNewProductsAvailability()
        => Console.WriteLine("Subscribing to new products availability...");

    public void SubscribeToSMSNotifications()
        => Console.WriteLine("Subscribing to SMS notifications...");

    public void UpdateUserProfile(Customer customer)
        => Console.WriteLine($"Updating user profile + {customer.Name}...");

    public void ChangePassword(Customer customer, string newPassword)
        => Console.WriteLine($"Updating user: {customer.Name}...");
}
