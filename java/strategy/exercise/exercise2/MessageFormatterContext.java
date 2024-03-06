package strategy.exercise.exercise2;

public class MessageFormatterContext {
    private MessageFormatter messageFormatter;

    public void setFormatter (MessageFormatter messageFormatter) {
        this.messageFormatter = messageFormatter;
    }

    public String formatMessage(String message) {
        return messageFormatter.format(message);
    }

    public String getFormatType() {
        return messageFormatter.getType();
    }
}
