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
