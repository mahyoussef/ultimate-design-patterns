namespace dotnet.Strategy.Interfaces;

public interface IPaymentStrategy
{
    void ProcessPayment(decimal amount);
}