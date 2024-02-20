package bridge.exercise;

public class EgyptAirAirline implements AirlineProvider {
    private final LoyaltyProgram loyaltyProgram;

    public EgyptAirAirline(LoyaltyProgram loyaltyProgram) {
        this.loyaltyProgram = loyaltyProgram;
    }

    @Override
    public void bookFlight() {
        System.out.println("booking flight in egypt air...");
        loyaltyProgram.applyDiscount();
    }
}
