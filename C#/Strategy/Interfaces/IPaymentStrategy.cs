namespace Strategy.Interfaces;

public interface IPaymentStrategy
{
    /// <summary>
    /// Process the payment with the given amount
    /// </summary>
    /// <param name="amount">Amount of money to be processed by payment strategies</param>
    void ProcessPayment(decimal amount);
}