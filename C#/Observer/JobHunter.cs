using dotnet.Observer.Interfaces;

namespace dotnet.Observer;

public class JobHunter : ISubscriber
{
    public string Name { get; set; } = string.Empty;
    
    public void Notify(string message)
    {
        Console.WriteLine($"Job Hunter {Name} received the message: {message}");
    }
}