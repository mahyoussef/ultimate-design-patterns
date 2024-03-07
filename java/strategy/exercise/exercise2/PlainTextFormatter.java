package strategy.exercise.exercise2;

public class PlainTextFormatter implements MessageFormatter {
    @Override
    public String format(String message) {
        return message;
    }

    @Override
    public String getType() {
        return "plaintext";
    }
}
