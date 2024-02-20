package decorator.exercise;

public class UnderlineTextDecorator extends TextDecorator {
    public UnderlineTextDecorator(Text text) {
        super(text);
    }

    @Override
    public String format() {
        return "<u>" + text.format() + "</u>";
    }
}
