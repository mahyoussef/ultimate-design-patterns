using System;

namespace Solid
{
    public class OrderManagement
    {
        public void ProcessOrder(Order order)
        {
            Console.WriteLine($"Processing order: {order.GetName()} now...");
        }
    }
}
