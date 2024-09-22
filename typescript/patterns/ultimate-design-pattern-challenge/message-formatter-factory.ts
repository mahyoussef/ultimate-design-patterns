class MessageFormatterFactory {
  private constructor() {}

  static getMessageFormatterInstance(
    messageToFormat: string,
  ): MessageFormatter {
    console.log("messageToFormat: " + messageToFormat);

    switch (messageToFormat.toLocaleLowerCase()) {
      case "json":
        return new JsonMessageFormatter();

      case "xml":
        return new XmlMessageFormatter();

      case "plain_text":
        return new PlainTextMessageFormatter();

      default:
        throw new Error("failed to format this type of message");
    }
  }
}
