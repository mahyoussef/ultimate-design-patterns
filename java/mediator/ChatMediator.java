package mediator;

public interface ChatMediator {

    void sendDirectMessage(String message, User toUser, User fromUser);
    void sendGroupMessage(String message, User fromUser, String toGroup);
    void registerUserToGroup(User user, String groupName);
}
