package prototype.exercise;

public class GUIButton implements CloneableButton {

    private String color;
    private int xPosition;
    private int yPosition;
    private String content;

    public GUIButton(String color, int xPosition, int yPosition, String content) {
        this.color = color;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.content = content;
    }

    public GUIButton cloneButton() {
        return new GUIButton(this.color, this.xPosition, this.yPosition, this.content);
    }

}
