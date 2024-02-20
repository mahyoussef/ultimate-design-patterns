package decorator;

public class CondimentDecorator implements Beverage {

    private Beverage beverage;

    public CondimentDecorator(Beverage beverage) {
        this.beverage = beverage;
    }

    @Override
    public String prepare() {
        return beverage.prepare();
    }
}
