using dotnet.SOLID.Models;

namespace dotnet.SOLID;

public class OrderMangement
{
    public void ProcessOrder(Order order)
    {
        Console.WriteLine("processing order " + order.Name +" Now!");
    }
}