namespace SOLID;

public sealed class AmericanExpressPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(double amount)
        => Console.WriteLine("Processing American Express card payments...");
}
