package strategy;

public class PremiumPricingStrategy implements PricingStrategy {
    @Override
    public double calculatePrice(double price) {
        return price * 0.8; // 20% discount
    }
}
