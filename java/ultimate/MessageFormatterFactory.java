package ultimate;

public class MessageFormatterFactory {

    private MessageFormatterFactory() {}
    public static MessageFormatter getMessageFormatterInstance(String messageToHandle) {
        if (messageToHandle.toLowerCase().contains("formatted: json")) {
            return new JsonMessageFormatter();
        }
        if (messageToHandle.toLowerCase().contains("formatted: plain_text")) {
            return new PlainTextMessageFormatter();
        }
        if (messageToHandle.toLowerCase().contains("formatted: xml")) {
            return new XMLMessageFormatter();
        }
        throw new UnsupportedOperationException("failed to format this type of message");
    }
}
