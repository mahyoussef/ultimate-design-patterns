package memento;

import java.util.Stack;

public class TextEditor {

    private String content;

    public TextEditor() {
        this.content = "";
    }

    public TextEditorState save() {
        return new TextEditorState(content);
    }

    public void restore(TextEditorState textEditorState) {
        content = textEditorState.getContent();
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
