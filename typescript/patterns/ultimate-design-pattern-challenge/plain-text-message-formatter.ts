class PlainTextMessageFormatter extends AbstractMessageFormatter {
  override format(messageToFormat: string): string {
    return messageToFormat + " formatted as plain text";
  }

  override getType(): string {
    return "PLAIN_TEXT_TYPE";
  }
}
