using dotnet.SOLID.Interface;

namespace dotnet.SOLID.PaymentsStrategyTypes;

public class MasterCardPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine("Processing payment of " + amount + " using MasterCard");
    }
}