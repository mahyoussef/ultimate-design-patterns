interface NotificationBuilder {
  setContent(content: string): NotificationBuilder;
  setSender(sender: string): NotificationBuilder;
  setRecipient(recipient: string): NotificationBuilder;
  setTimestamp(timestamp: string): NotificationBuilder;
}

// ####################################

class MessengerNotificationBuilder implements NotificationBuilder {
  private content: string;
  private sender: string;
  private recipient: string;
  private timestamp: string;
  private attachment: Array<string>;
  private theme: string;

  getContent(): string {
    return this.content;
  }

  setContent(content: string): MessengerNotificationBuilder {
    this.content = content;
    return this;
  }

  getRecipient(): string {
    return this.recipient;
  }

  setRecipient(recipient: string): MessengerNotificationBuilder {
    this.recipient = recipient;
    return this;
  }

  getSender(): string {
    return this.sender;
  }

  setSender(sender: string): MessengerNotificationBuilder {
    this.sender = sender;
    return this;
  }

  getTimestamp(): string {
    return this.timestamp;
  }

  setTimestamp(timestamp: string): MessengerNotificationBuilder {
    this.timestamp = timestamp;
    return this;
  }

  getAttachment(): Array<string> {
    return this.attachment;
  }

  setAttachment(attachment: Array<string>): MessengerNotificationBuilder {
    this.attachment = attachment;
    return this;
  }

  getTheme(): string {
    return this.theme;
  }

  setTheme(theme: string): MessengerNotificationBuilder {
    this.theme = theme;
    return this;
  }

  build(): MessengerNotification {
    return new MessengerNotification(this);
  }
}

// ####################################

class MessengerNotification {
  private content: string;
  private sender: string;
  private recipient: string;
  private timestamp: string;
  private attachment: Array<string>;
  private theme: string;

  constructor(messengerNotificationBuilder: MessengerNotificationBuilder) {
    this.content = messengerNotificationBuilder.getContent();
    this.sender = messengerNotificationBuilder.getSender();
    this.recipient = messengerNotificationBuilder.getRecipient();
    this.timestamp = messengerNotificationBuilder.getTimestamp();
    this.attachment = messengerNotificationBuilder.getAttachment();
    this.theme = messengerNotificationBuilder.getTheme();
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

  getSender(): string {
    return this.sender;
  }

  setSender(sender: string): void {
    this.sender = sender;
  }

  getRecipient(): string {
    return this.recipient;
  }

  setRecipient(recipient: string): void {
    this.recipient = recipient;
  }

  getTimestamp(): string {
    return this.timestamp;
  }

  setTimestamp(timestamp: string): void {
    this.timestamp = timestamp;
  }

  getAttachment(): Array<string> {
    return this.attachment;
  }

  setAttachment(attachment: Array<string>): void {
    this.attachment = attachment;
  }

  getTheme(): string {
    return this.theme;
  }

  setTheme(theme: string): void {
    this.theme = theme;
  }
}

// Example usage

const messengerNotification = new MessengerNotificationBuilder()
  .setContent("Hello World")
  .setSender("John Doe")
  .setRecipient("Jane Doe")
  .setTimestamp("2023-01-01T00:00:00.000Z")
  .setAttachment(["https://dummyjson.com/image/600x400"])
  .setTheme("DARK")
  .build();

console.log(messengerNotification.getContent());
