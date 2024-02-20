package memento.exercise;

import memento.TextEditorState;

import java.util.Stack;

public class History {

    private final Stack<CanvasState> prevStates;

    public History() {
        this.prevStates = new Stack<>();
    }

    public void saveHistoryState(CanvasState canvasState) {
        prevStates.push(canvasState);
    }

    public CanvasState undo() {
        if (!prevStates.isEmpty()) {
            return prevStates.pop();
        }
        return null;
    }
}
