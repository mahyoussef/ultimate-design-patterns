

using dotnet.Observer.Quiz.Interfaces;

namespace dotnet.Observer.Quiz;

public class Subscriber : ISubscriber
{
    public string Name { get; set; } = string.Empty;
    
    public void Notify(string message)
    {
        Console.WriteLine($"User {Name} received the message: {message}");
    }
}