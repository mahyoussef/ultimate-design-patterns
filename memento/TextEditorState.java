package memento;

public class TextEditorState {

    private String content;

    public TextEditorState(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
