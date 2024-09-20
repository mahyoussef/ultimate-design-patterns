interface ChatMediator {
  sendDirectMessage(message: string, sender: User, receiver: User): void;
  sendGroupMessage(message: string, groupName: string, sender: User): void;
  registerUserToGroup(user: User, groupName: string): void;
}
