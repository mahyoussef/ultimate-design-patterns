class XmlMessageFormatter extends AbstractMessageFormatter {
  override format(messageToFormat: string): string {
    return messageToFormat + " xml formatted";
  }

  override getType(): string {
    return "XML_TYPE";
  }
}
