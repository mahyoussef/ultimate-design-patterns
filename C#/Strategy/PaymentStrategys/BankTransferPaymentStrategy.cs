using dotnet.Strategy.Interfaces;

namespace dotnet.Strategy.PaymentStrategys;

public class BankTransferPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing bank transfer payment for {amount}");
    }
}