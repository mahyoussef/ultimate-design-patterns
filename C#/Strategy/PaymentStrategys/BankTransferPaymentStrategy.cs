using Strategy.Interfaces;

namespace Strategy.PaymentStrategys;

public sealed class BankTransferPaymentStrategy : IPaymentStrategy
{
    /// <summary>
    /// Bank Transfer payment processing
    /// </summary>
    /// <param name="amount"><inheritdoc/></param>
    public void ProcessPayment(decimal amount)
        => Console.WriteLine($"Processing bank transfer payment for {amount}");
}