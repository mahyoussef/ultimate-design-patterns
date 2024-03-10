namespace Memento;

public sealed class TextEditorState
{
    public string Content { get; set; }

    public TextEditorState(string content)
        => Content = content;
}
