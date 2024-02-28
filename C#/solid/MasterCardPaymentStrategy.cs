using System;

namespace Solid
{
    public class MasterCardPaymentStrategy : PaymentStrategy
    {
        public void ProcessPayment(double amount)
        {
            Console.WriteLine("Processing master card payments...");
        }
    }
}
