namespace Prototype.Excercise;

public sealed class GUIButton : IClonableButton
{
    private readonly string _color;
    private readonly int _xPosition;
    private readonly int _yPosition;
    private readonly string _content;

    public GUIButton(string color, int xPosition, int yPosition, string content)
    {
        _color = color;
        _xPosition = xPosition;
        _yPosition = yPosition;
        _content = content;
    }

    public GUIButton CloneButton()
        => new(_color, _xPosition, _yPosition, _content);
}
