using System;

namespace Solid
{
    public class Subscriber : SubscriptionNotificationService
    {
        private string email;

        public void SubscribeToNewProductsAvailability()
        {
            Console.WriteLine("Subscribing to new products availability...");
        }

        public void SubscribeToSMSNotifications()
        {
            Console.WriteLine("Subscribing to SMS notifications...");
        }
    }

}
