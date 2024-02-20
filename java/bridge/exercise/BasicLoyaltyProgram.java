package bridge.exercise;

public class BasicLoyaltyProgram implements LoyaltyProgram {
    @Override
    public void applyDiscount() {
        System.out.println("Applying discount with basic loyalty program...");
    }
}
