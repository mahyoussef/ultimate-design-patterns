using System.Runtime.InteropServices;

namespace Mediator;

public sealed class ChatManagement : IChatMediator
{
    private readonly Dictionary<string, List<User>> _groups;

    public ChatManagement()
        => _groups = [];

    public void RegisterUserToGroup(User user, string groupName)
    {
        if (!_groups.TryGetValue(groupName, out List<User>? value))
        {
            value = [user];
            _groups.Add(groupName, value);
            return;
        }

        _groups[groupName].Add(user);
    }

    public void SendDirectMessage(string message, User toUser, User fromUser)
    {
        Console.WriteLine($"{fromUser.Name} is sending message: {message} to user: {toUser.Name}");
        toUser.ReceiveDirectMessage(message, fromUser);
    }

    public void SendGroupMessage(string message, User fromUser, string toGroup)
    {
        Console.WriteLine($"{fromUser.Name} is sending message: {message} to group: {toGroup}");
        List<User> users = _groups[toGroup];

        foreach (var user in CollectionsMarshal.AsSpan(users))
        {
            user.ReceiveGroupMessage(message, fromUser, toGroup);
        }
    }
}
