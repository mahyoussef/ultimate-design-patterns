package prototype;

public class Brochure extends MarketingMaterial {
    public Brochure(String layout, String content, String color) {
        super(layout, content, color);
    }

    @Override
    public Brochure cloneMarketingMaterial() {
        return new Brochure(this.getLayout(), this.getContent(), this.getColor());
    }

}
