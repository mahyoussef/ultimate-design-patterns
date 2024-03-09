using Observer.Interfaces;

namespace Observer;

public sealed class Customer : ISubscriber
{
    public string Name { get; set; } = string.Empty;

    public void Notify(string message)
        => Console.WriteLine($"Customer {Name} sent the message: {message}");
}