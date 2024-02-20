package bridge.exercise;

public class TurkishAirline implements AirlineProvider {
    private final LoyaltyProgram loyaltyProgram;

    public TurkishAirline(LoyaltyProgram loyaltyProgram) {
        this.loyaltyProgram = loyaltyProgram;
    }
    @Override
    public void bookFlight() {
        System.out.println("booking flight in turkish air...");
    }
}
