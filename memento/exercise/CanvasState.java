package memento.exercise;

public class CanvasState {
    private String content;
    private String color;
    private String border;

    public CanvasState(String content, String color, String border) {
        this.content = content;
        this.color = color;
        this.border = border;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getBorder() {
        return border;
    }

    public void setBorder(String border) {
        this.border = border;
    }
}
