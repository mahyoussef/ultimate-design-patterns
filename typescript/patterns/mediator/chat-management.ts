class ChatManagement implements ChatMediator {
  private groups: Map<string, User[]>;
  constructor() {
    this.groups = new Map<string, User[]>();
  }

  sendDirectMessage(message: string, sender: User, receiver: User): void {
    console.log(`
          Sending new message
          from user: ${sender.getName()}
          to user: ${receiver.getName()}
          content: ${message} 
          `);
    receiver.receiveDirectMessage(message, sender);
  }

  sendGroupMessage(message: string, groupName: string, sender: User): void {
    console.log(`
          Sending new message
          from user: ${sender.getName()}
          to group: ${groupName}
          content: ${message}
          `);
    this.groups
      .get(groupName)
      ?.filter((user) => user !== sender)
      .forEach((user) => {
        user.receiveGroupMessage(message, groupName, sender);
      });
  }

  registerUserToGroup(user: User, groupName: string): void {
    const group = this.groups.get(groupName);
    if (!group) {
      this.groups.set(groupName, [user]);
      return;
    }

    group.push(user);
  }
}
