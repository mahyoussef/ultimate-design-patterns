using Observer.Interfaces;

namespace Observer;

public sealed class JobHunter : ISubscriber
{
    public string Name { get; set; } = string.Empty;

    public void Notify(string message)
        => Console.WriteLine($"Job Hunter {Name} sent the message: {message}");
}