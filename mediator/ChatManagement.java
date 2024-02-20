package mediator;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ChatManagement implements ChatMediator {
    private Map<String, List<User>> groups;

    public ChatManagement() {
        this.groups = new HashMap<>();
    }

    @Override
    public void sendDirectMessage(String message, User toUser, User fromUser) {
        System.out.println(fromUser.getName() + " is sending message: "
                + message + " to user: " + toUser.getName());
        toUser.receiveDirectMessage(message, fromUser);
    }

    @Override
    public void sendGroupMessage(String message, User fromUser, String toGroup) {
        System.out.println(fromUser.getName() + " is sending message: " + message + " to group: " + toGroup);
        var users = groups.get(toGroup);
        users.forEach(user -> user.receiveGroupMessage(message, fromUser, toGroup));
    }

    @Override
    public void registerUserToGroup(User user, String groupName) {
        if (!groups.containsKey(groupName)) {
            List<User> users = new ArrayList<>();
            users.add(user);
            groups.put(groupName, users);
            return;
        }
        groups.get(groupName).add(user);
    }
}
