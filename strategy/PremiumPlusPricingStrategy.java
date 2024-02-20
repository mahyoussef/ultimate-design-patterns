package strategy;

public class PremiumPlusPricingStrategy implements PricingStrategy {
    @Override
    public double calculatePrice(double price) {
        return price * 0.7; // 30% discount
    }
}
