using System;

namespace Solid
{
    public class PaypalPaymentStrategy : PaymentStrategy
    {
        public void ProcessPayment(double amount)
        {
            Console.WriteLine("Processing PayPal payments...");
        }
    }
}
