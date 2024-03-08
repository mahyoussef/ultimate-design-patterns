namespace SOLID;

public interface IPaymentStrategy
{
    void ProcessPayment(double amount);
}
