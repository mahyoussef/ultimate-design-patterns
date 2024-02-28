using System;

namespace Solid
{
    public class VisaPaymentStrategy : PaymentStrategy
    {
        public void ProcessPayment(double amount)
        {
            Console.WriteLine("Processing Visa card payments...");
        }
    }
}
