namespace Mediator;

public sealed class User
{
    public string Name { get; }

    private readonly IChatMediator _chatMediator;

    public User(IChatMediator chatMediator, string name)
    {
        _chatMediator = chatMediator;
        Name = name;
    }

    public void SendDirectMessage(string message, User toUser)
        => _chatMediator.SendDirectMessage(message, toUser, this);

    public void SendGroupMessage(string message, string toGroup)
        => _chatMediator.SendGroupMessage(message, this, toGroup);

    public void ReceiveDirectMessage(string message, User user)
        => Console.WriteLine($"{Name} is receiving message: {message} from user: {user.Name}");

    public void ReceiveGroupMessage(string message, User fromUser, string groupName)
        => Console.WriteLine($"{Name} is receiving message: {message} from group: {groupName} and from user: {fromUser.Name}");
}
