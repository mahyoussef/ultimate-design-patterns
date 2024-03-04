package strategy.exercise.exercise2;

public class JsonFormatter implements MessageFormatter {
    @Override
    public String format(String message) {
        return "{\"message\": \"" + message + "\"}";
    }

    @Override
    public String getType() {
        return "json";
    }
}
