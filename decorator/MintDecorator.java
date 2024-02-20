package decorator;

public class MintDecorator extends CondimentDecorator implements Beverage {
    public MintDecorator(Beverage beverage) {
        super(beverage);
    }

    public String prepare() {
        return super.prepare() + " with Mint";
    }
}
