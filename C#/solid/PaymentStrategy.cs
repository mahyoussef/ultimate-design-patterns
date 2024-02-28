namespace Solid
{
    public interface PaymentStrategy
    {
        void ProcessPayment(double amount);
    }
}
