package memento;

import java.util.Stack;

public class History {

    private final Stack<TextEditorState> prevStates;

    public History() {
        this.prevStates = new Stack<>();
    }

    public void saveHistoryState(TextEditorState textEditorState) {
        prevStates.push(textEditorState);
    }

    public TextEditorState undo() {
        if (!prevStates.isEmpty()) {
            return prevStates.pop();
        }
        return null;
    }
}
