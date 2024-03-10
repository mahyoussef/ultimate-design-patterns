using Memento;

History notepadHistory = new();
TextEditor notepad = new()
{
    Content = "Hello, World!"
};

TextEditorState initialState = notepad.Save();
notepadHistory.SaveHistoryState(initialState);
Console.WriteLine($"Current Content: {notepad.Content}");

notepad.Content = "C# is cool!";

// No saving here, so the history will not be updated
Console.WriteLine($"Current Content: {notepad.Content}");

TextEditorState? initialStateFromHistory = notepadHistory.Undo();

if (initialStateFromHistory is not null)
{
    notepad.Restore(initialStateFromHistory);
}

Console.WriteLine($"Current Content: {notepad.Content}");
