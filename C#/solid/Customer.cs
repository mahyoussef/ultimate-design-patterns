using System;

namespace Solid
{
    public class Customer : UserManagement, SubscriptionNotificationService
    {
        private string name;
        private string email;

        public Customer(string name)
        {
            this.name = name;
        }

        public string Name
        {
            get { return name; }
        }

        public string Email
        {
            get { return email; }
        }

        public void SubscribeToNewProductsAvailability()
        {
            Console.WriteLine("Subscribing to new products availability...");
        }

        public void SubscribeToSMSNotifications()
        {
            Console.WriteLine("Subscribing to SMS notifications...");
        }

        public void UpdateUserProfile(Customer customer)
        {
            Console.WriteLine("Updating user profile + " + customer.Name + "...");
        }

        public void ChangePassword(Customer customer, string newPassword)
        {
            Console.WriteLine("Updating user: " + customer.Name + "...");
        }
    }

}
