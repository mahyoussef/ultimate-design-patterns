package memento.exercise;

import memento.TextEditorState;

public class Canvas {
    private String content;
    private String color;
    private String border;

    public Canvas() {
        this.content = "";
        this.color = "";
        this.border = "";
    }

    public CanvasState save() {
        return new CanvasState(content, color, border);
    }

    public void restore(CanvasState canvasState) {
        content = canvasState.getContent();
        color = canvasState.getColor();
        border = canvasState.getBorder();
    }

    public String getContent() {
        return content;
    }

    public String getColor() {
        return color;
    }

    public String getBorder() {
        return border;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setBorder(String border) {
        this.border = border;
    }
}
