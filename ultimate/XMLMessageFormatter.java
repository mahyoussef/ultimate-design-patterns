package ultimate;

public class XMLMessageFormatter extends AbstractMessageFormatter {

    @Override
    protected String format(String messageToFormat) {
        return messageToFormat + " xml formatted";
    }

    @Override
    public String getType() {
        return "XML_TYPE";
    }
}
