package decorator;

public class MilkDecorator extends CondimentDecorator implements Beverage {
    public MilkDecorator(Beverage beverage) {
        super(beverage);
    }

    public String prepare() {
        return super.prepare() + " with Milk";
    }
}
