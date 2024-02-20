package mediator;

public class User {

    private final String name;
    private final ChatMediator chatMediator;

    public User(String name, ChatMediator chatMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }

    public void sendDirectMessage(String message, User toUser) {
        chatMediator.sendDirectMessage(message, toUser, this);
    }

    public void receiveDirectMessage(String message, User user) {
        System.out.println(name + " is receiving message: " + message + " from user: " + user.getName());
    }

    public void sendGroupMessage(String message, String groupName) {
        chatMediator.sendGroupMessage(message, this, groupName);
    }

    public void receiveGroupMessage(String message, User fromUser, String groupName) {
        System.out.println(name + " is receiving message: " + message + " from group: "
                + groupName + " and from user: " + fromUser.getName());
    }

    public String getName() {
        return name;
    }
}
