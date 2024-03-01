using dotnet.SOLID.Interface;

namespace dotnet.SOLID.PaymentsStrategyTypes;

public class VisaPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing Visa payment of {amount}");
    }
}