package decorator.exercise;

public class BaseText implements Text {
    private String content;

    public BaseText(String content) {
        this.content = content;
    }

    @Override
    public String format() {
        return content;
    }
}
