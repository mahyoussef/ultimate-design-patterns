package strategy;

public class GoldPricingStrategy implements PricingStrategy {
    @Override
    public double calculatePrice(double price) {
        return price * 0.9; // 10% discount
    }
}
