namespace Memento;

/// <summary>
/// Storage for all previous states of the text editor.
/// </summary>
public sealed class History
{
    private readonly Stack<TextEditorState> _prevStates;

    public History()
        => _prevStates = new Stack<TextEditorState>();

    public void SaveHistoryState(TextEditorState textEditorState)
        => _prevStates.Push(textEditorState);

    public TextEditorState? Undo()
        => _prevStates.Count > 0 ? _prevStates.Pop() : null;
}
