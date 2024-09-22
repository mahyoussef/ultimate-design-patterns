interface MessageFormatter {
  formatMessage(messageToFormat: string): string;
  getType(): string;
}
