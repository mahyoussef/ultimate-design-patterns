using dotnet.Strategy.Interfaces;

namespace dotnet.Strategy.PaymentStrategys;

public class PaypalPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing paypal payment for {amount}");
    }
}