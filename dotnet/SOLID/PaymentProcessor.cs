using dotnet.SOLID.Interface;
using dotnet.SOLID.Models;

namespace dotnet.SOLID;

public class PaymentProcessor
{
    private readonly IPaymentStrategy _paymentProcessor;
    
    public PaymentProcessor(IPaymentStrategy paymentProcessor)
    {
        _paymentProcessor = paymentProcessor;
    }
    
    public void ProcessPayment(Order order)
    {
        Console.WriteLine("processing payment for order " + order.Name + "with price " + order.Price + " Now!");
        
        _paymentProcessor.ProcessPayment(order.Price);
    }
}