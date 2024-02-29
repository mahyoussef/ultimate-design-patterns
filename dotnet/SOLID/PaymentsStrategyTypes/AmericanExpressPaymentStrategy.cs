using dotnet.SOLID.Interface;

namespace dotnet.SOLID.PaymentsStrategyTypes;

public class AmericanExpressPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine("Processing payment of " + amount + " using American Express");
    }
}