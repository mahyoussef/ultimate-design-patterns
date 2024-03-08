namespace Memento.Exercise;

public sealed class History
{
    private readonly Stack<CanvasState> _prevStates;

    public History()
        => _prevStates = new Stack<CanvasState>();

    public void SaveHistoryState(CanvasState canvasState)
        => _prevStates.Push(canvasState);

    public CanvasState? Undo()
        => _prevStates.Count > 0 ? _prevStates.Pop() : null;
}
