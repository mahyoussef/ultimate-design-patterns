namespace Memento.Exercise;

public sealed class CanvasState
{
    public string Content { get; set; }
    public string Color { get; set; }
    public string Border { get; set; }

    public CanvasState(string content, string color, string border)
    {
        Content = content;
        Color = color;
        Border = border;
    }
}
