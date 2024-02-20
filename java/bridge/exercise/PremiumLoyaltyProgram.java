package bridge.exercise;

public class PremiumLoyaltyProgram implements LoyaltyProgram {
    @Override
    public void applyDiscount() {
        System.out.println("Applying discount with premium loyalty program...");
    }
}
