namespace dotnet.SOLID.Interface;

public interface IPaymentStrategy
{
    void ProcessPayment(decimal amount);
}