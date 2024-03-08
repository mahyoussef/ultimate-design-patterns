namespace SOLID;

public sealed class MasterCardPaymentStrategy : IPaymentStrategy
{
    public void ProcessPayment(double amount)
        => Console.WriteLine("Processing master card payments...");
}
