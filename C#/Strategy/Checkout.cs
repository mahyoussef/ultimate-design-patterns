using Strategy.Interfaces;

namespace Strategy;

public sealed class Checkout
{
    private readonly IPaymentStrategy _paymentStrategy;

    public Checkout(IPaymentStrategy paymentStrategy)
        => _paymentStrategy = paymentStrategy;

    /// <summary>
    /// Process the payment based on <see cref="IPaymentStrategy"/> implementation provided
    /// </summary>
    /// <param name="amount">Amount of money to be processed</param>
    public void ProcessPayment(decimal amount)
        => _paymentStrategy.ProcessPayment(amount);
}