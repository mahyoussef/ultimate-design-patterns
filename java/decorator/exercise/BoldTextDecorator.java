package decorator.exercise;

public class BoldTextDecorator extends TextDecorator {

    public BoldTextDecorator(Text text) {
        super(text);
    }

    @Override
    public String format() {
        return "<b>" + text.format() + "</b>";
    }
}
