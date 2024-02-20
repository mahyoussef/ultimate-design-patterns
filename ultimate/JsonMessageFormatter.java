package ultimate;

public class JsonMessageFormatter extends AbstractMessageFormatter {

    @Override
    protected String format(String messageToFormat) {
        return messageToFormat + " json formatted";
    }

    @Override
    public String getType() {
        return "JSON_TYPE";
    }
}
