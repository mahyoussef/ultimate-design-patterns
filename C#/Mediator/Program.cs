using Mediator;

ChatManagement chatMediator = new();

User user1 = new(chatMediator, "User1");
User user2 = new(chatMediator, "User2");
User user3 = new(chatMediator, "User3");

chatMediator.RegisterUserToGroup(user1, "Group1");
chatMediator.RegisterUserToGroup(user2, "Group1");

user1.SendDirectMessage("Hello User2 in direct", user2);
user1.SendGroupMessage("Hello Group1", "Group1");

user3.SendGroupMessage("Hello Group1", "Group1");