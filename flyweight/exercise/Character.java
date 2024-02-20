package flyweight.exercise;

class Character implements TextElement {
    private char character;
    private Font font;
    private Color color;

    public Character(char character, Font font, Color color) {
        this.character = character;
        this.font = font;
        this.color = color;
    }

    @Override
    public void render(int xPosition, int yPosition) {
        // Render the character at position (xPosition, yPosition) with font and color
    }
}
