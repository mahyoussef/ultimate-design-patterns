package prototype;

public abstract class MarketingMaterial implements Cloneable {

    private String layout;
    private String content;
    private String color;

    public MarketingMaterial(String layout, String content, String color) {
        this.layout = layout;
        this.content = content;
        this.color = color;
    }

    public String getLayout() {
        return layout;
    }

    public void setLayout(String layout) {
        this.layout = layout;
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

    public void print() {
        System.out.println("Marketing Material Configuration:");
        System.out.println("Layout: " + layout);
        System.out.println("Content: " + content);
        System.out.println("Color: " + color);
        System.out.println("Printing now ...");
    }

    public abstract MarketingMaterial cloneMarketingMaterial();

    @Override
    public MarketingMaterial clone() {
        try {
            MarketingMaterial clone = (MarketingMaterial) super.clone();
            // TODO: copy mutable state here, so the clone can't change the internals of the original
            return clone;
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }
}
