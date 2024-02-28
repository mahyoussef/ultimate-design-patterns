using System;

namespace Solid
{
    public class AmericanExpressPaymentStrategy : PaymentStrategy
    {
        public void ProcessPayment(double amount)
        {
            Console.WriteLine("Processing American Express card payments...");
        }
    }

}
