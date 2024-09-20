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
