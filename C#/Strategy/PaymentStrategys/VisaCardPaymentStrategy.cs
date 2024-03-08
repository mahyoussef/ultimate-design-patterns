using Strategy.Interfaces;

namespace Strategy.PaymentStrategys;

public sealed class VisaCardPaymentStrategy : IPaymentStrategy
{
    /// <summary>
    /// Visa Card payment processing
    /// </summary>
    /// <param name="amount"><inheritdoc/></param>
    public void ProcessPayment(decimal amount)
        => Console.WriteLine($"Processing visa card payment for {amount}");
}