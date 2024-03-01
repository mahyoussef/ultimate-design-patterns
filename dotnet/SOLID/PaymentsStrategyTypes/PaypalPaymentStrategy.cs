using dotnet.SOLID.Interface;

namespace dotnet.SOLID.PaymentsStrategyTypes;

public class PaypalPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {   
        Console.WriteLine("Processing payment of " + amount + " using Paypal");
    }
}