package prototype;

public class Poster extends MarketingMaterial {
    public Poster(String layout, String content, String color) {
        super(layout, content, color);
    }

    @Override
    public Poster cloneMarketingMaterial() {
        return new Poster(this.getLayout(), this.getContent(), this.getColor());
    }
}
