interface NotificationBuilder {
  setContent(content: string): NotificationBuilder;
  setSender(sender: string): NotificationBuilder;
  setRecipient(recipient: string): NotificationBuilder;
  setTimestamp(timestamp: string): NotificationBuilder;
}
