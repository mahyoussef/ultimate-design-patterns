namespace Proxy.Exercise;

public sealed class User
{
    public string Name { get; }

    public bool HasPermission { get => false; }

    public User(string username)
        => Name = username;
}
