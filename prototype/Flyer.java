package prototype;

public class Flyer extends MarketingMaterial {
    public Flyer(String layout, String content, String color) {
        super(layout, content, color);
    }

    @Override
    public Flyer cloneMarketingMaterial() {
        return new Flyer(this.getLayout(), this.getContent(), this.getColor());
    }
}
