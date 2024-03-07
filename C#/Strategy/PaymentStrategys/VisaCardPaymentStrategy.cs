using dotnet.Strategy.Interfaces;

namespace dotnet.Strategy.PaymentStrategys;

public class VisaCardPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing visa card payment for {amount}");
    }
}