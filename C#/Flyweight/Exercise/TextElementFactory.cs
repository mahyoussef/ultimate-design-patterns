using System.Security.Cryptography.X509Certificates;

namespace Flyweight.Exercise;

public sealed class TextElementFactory
{
    private readonly Dictionary<string, ITextElement> _textElementCache;

    public TextElementFactory()
        => _textElementCache = [];

    public ITextElement GetTextElement(char character, Font fontName, Color colorName)
    {
        string key = $"{character}_{fontName}_{colorName}";

        if (!_textElementCache.TryGetValue(key, out ITextElement? value))
        {
            _textElementCache.Add(key, new Character(character, fontName, colorName));
        }

        return value;
    }
}
