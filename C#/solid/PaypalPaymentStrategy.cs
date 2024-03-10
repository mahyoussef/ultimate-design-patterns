namespace SOLID;

public sealed class PaypalPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(double amount)
        => Console.WriteLine("Processing PayPal payments...");
}
