namespace Memento;

/// <summary>
/// Text editor that can save and restore its state.
/// </summary>
public sealed class TextEditor
{
    public string Content { get; set; }

    public TextEditor()
        => Content = string.Empty;

    public TextEditorState Save()
        => new(Content);

    public void Restore(TextEditorState textEditorState)
        => Content = textEditorState.Content;
}
