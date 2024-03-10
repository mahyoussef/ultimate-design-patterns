namespace Memento.Exercise;

public sealed class Canvas
{
    public string Content { get; set; }
    public string Color { get; set; }
    public string Border { get; set; }

    public Canvas()
    {
        Content = string.Empty;
        Color = string.Empty;
        Border = string.Empty;
    }

    public CanvasState Save()
        => new(Content, Color, Border);

    public void Restore(CanvasState canvasState)
    {
        Content = canvasState.Content;
        Color = canvasState.Color;
        Border = canvasState.Border;
    }
}
