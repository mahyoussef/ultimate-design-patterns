namespace Flyweight.Exercise;

public sealed class Character : ITextElement
{
    private char _character;
    private Font _font;
    private Color _color;

    public Character(char character, Font font, Color color)
    {
        _character = character;
        _font = font;
        _color = color;
    }

    public void Render(int xPosition, int yPosition)
    {
        // Render the character at position (xPosition, yPosition) with font and color
    }
}
