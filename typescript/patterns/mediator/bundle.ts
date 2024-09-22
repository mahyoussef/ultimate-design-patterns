interface ChatMediator {
  sendDirectMessage(message: string, sender: User, receiver: User): void;
  sendGroupMessage(message: string, groupName: string, sender: User): void;
  registerUserToGroup(user: User, groupName: string): void;
}

class Group {
  private name: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

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

// Example usage
const chatMediator = new ChatManagement();

const ahmed = new User("Ahmed", chatMediator);
const ali = new User("Ali", chatMediator);
const omar = new User("Omar", chatMediator);

chatMediator.registerUserToGroup(ahmed, "Gaming");
chatMediator.registerUserToGroup(ali, "Gaming");
chatMediator.registerUserToGroup(omar, "Gaming");

ahmed.sendGroupMessage("Hello everyone!", "Gaming");

ahmed.sendDirectMessage("Hello Ali!", ali);
ali.sendDirectMessage("Hello Ahmed!", ahmed);
