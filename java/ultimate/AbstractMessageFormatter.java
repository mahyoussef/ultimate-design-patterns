package ultimate;

public abstract class AbstractMessageFormatter implements MessageFormatter {

    public String formatMessage(String messageToFormat) {
        validateMessage();
        checkMessageSize();
        return format(messageToFormat);
    }

    private void checkMessageSize() {
        System.out.println("Checking message size...");
    }

    private void validateMessage() {
        System.out.println("validating the message....");
    }

    protected abstract String format(String messageToFormat);

    @Override
    public abstract String getType();
}
