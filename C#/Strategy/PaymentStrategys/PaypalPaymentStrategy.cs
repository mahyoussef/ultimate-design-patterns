using Strategy.Interfaces;

namespace Strategy.PaymentStrategys;

public sealed class PaypalPaymentStrategy : IPaymentStrategy
{
    /// <summary>
    /// Paypal payment processing
    /// </summary>
    /// <param name="amount"><inheritdoc/></param>
    public void ProcessPayment(decimal amount)
        => Console.WriteLine($"Processing paypal payment for {amount}");
}