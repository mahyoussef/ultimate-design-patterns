using dotnet.Observer.Interfaces;

namespace dotnet.Observer;

public class Customer : ISubscriber
{
    public string Name { get; set; } = string.Empty;
    
    public void Notify(string message)
    {
        Console.WriteLine($"Customer {Name} received the message: {message}");
    }
}