namespace dotnet.SOLID.Interface;

public interface ISubscriptionNotificationService
{
    internal void SubscribeToNewProductsAvailability();
    internal void SubscribeToSmsNotifications();
}