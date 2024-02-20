package ultimate;

public class PlainTextMessageFormatter extends AbstractMessageFormatter {

    @Override
    public String format(String messageToFormat) {
        return messageToFormat + " plain text formatted";
    }

    @Override
    public String getType() {
        return "PLAIN_TEXT_TYPE";
    }
}
