package decorator;

public class SugarDecorator extends CondimentDecorator implements Beverage {
    public SugarDecorator(Beverage beverage) {
        super(beverage);
    }

    public String prepare() {
        return super.prepare() + " with sugar";
    }
}
