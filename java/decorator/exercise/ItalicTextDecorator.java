package decorator.exercise;

public class ItalicTextDecorator extends TextDecorator {
    public ItalicTextDecorator(Text text) {
        super(text);
    }

    @Override
    public String format() {
        return "<i>" + text.format() + "</i>";
    }
}
