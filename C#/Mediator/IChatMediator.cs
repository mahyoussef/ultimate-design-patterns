namespace Mediator;

public interface IChatMediator
{
    void SendDirectMessage(string message, User toUser, User fromUser);
    void SendGroupMessage(string message, User fromUser, string toGroup);
    void RegisterUserToGroup(User user, string groupName);
}
