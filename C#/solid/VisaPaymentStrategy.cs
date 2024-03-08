namespace SOLID;

public sealed class VisaPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(double amount)
        => Console.WriteLine("Processing Visa card payments...");
}
