namespace SOLID;

public interface ISubscriptionNotificationService
{
    void SubscribeToNewProductsAvailability();
    void SubscribeToSMSNotifications();
}
