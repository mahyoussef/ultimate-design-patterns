package flyweight.exercise;

public class WordProcessor {
    private TextElementFactory textElementFactory;

    public WordProcessor() {
        textElementFactory = new TextElementFactory();
    }

    public void renderText(String text, Font font, Color color, int x, int y) {
        // Iterate through characters in the text and render them using flyweight characters
        for (int i = 0; i < text.length(); i++) {
            char character = text.charAt(i);
            TextElement textElement = textElementFactory.getTextElement(character, font, color);
            textElement.render(x + i * font.getWidth(), y); // Adjust position based on font metrics
        }
    }
}
