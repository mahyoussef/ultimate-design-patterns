class User {
  private name: string;
  private chatMediator: ChatMediator;

  constructor(name: string, chatMediator: ChatMediator) {
    this.name = name;
    this.chatMediator = chatMediator;
  }

  sendDirectMessage(message: string, receiver: User): void {
    console.log(`
          user: ${this.name}
          sending message to user: ${receiver.getName()}
          content: ${message}
          `);
    this.chatMediator.sendDirectMessage(message, this, receiver);
  }

  receiveDirectMessage(message: string, sender: User): void {
    console.log(`
          User: ${this.name}
          received message from user: ${sender.getName()}
          content: ${message}
          `);
  }

  sendGroupMessage(message: string, groupName: string): void {
    console.log(`
          User: ${this.name}
          sending message to group: ${groupName}
          content: ${message}
          `);
    this.chatMediator.sendGroupMessage(message, groupName, this);
  }

  receiveGroupMessage(message: string, groupName: string, sender: User): void {
    console.log(`
          User: ${this.name}
          received message from group: ${groupName}
          sent by user: ${sender.getName()}
          content: ${message}
          `);
  }

  public getName(): string {
    return this.name;
  }
}
