namespace Flyweight.Exercise;

public sealed class WordProcessor
{
    private readonly TextElementFactory _textElementFactory;

    public WordProcessor()
        => _textElementFactory = new();

    public void RenderTexts(string text, Font font, Color color, int x, int y)
    {
        // Iterate through characters in the text and render them using flyweight characters
        for (int i = 0; i < text.Length; i++)
        {
            char character = text[i];
            ITextElement textElement = _textElementFactory.GetTextElement(character, font, color);
            textElement.Render(x + i * font.Width, y);
        }
    }
}
