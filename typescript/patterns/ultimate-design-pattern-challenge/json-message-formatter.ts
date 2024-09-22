class JsonMessageFormatter extends AbstractMessageFormatter {
  override format(messageToFormat: string): string {
    return messageToFormat + " json formatted";
  }

  override getType(): string {
    return "JSON_TYPE";
  }
}
