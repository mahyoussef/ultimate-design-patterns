using System;

namespace Solid
{
    public class PaymentProcessor
    {
        private readonly PaymentStrategy paymentStrategy;

        public PaymentProcessor(PaymentStrategy paymentStrategy)
        {
            this.paymentStrategy = paymentStrategy ?? throw new ArgumentNullException(nameof(paymentStrategy));
        }

        public void ProcessPayment(Order order)
        {
            Console.WriteLine($"Processing payment of order: {order.GetName()}");
            Console.WriteLine($"Issuing payment for amount: {order.GetPrice()}");
            paymentStrategy.ProcessPayment(order.GetPrice());
        }
    }
}
