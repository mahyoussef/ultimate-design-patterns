package mediator.exercise;

public class TravelAirplane implements Airplane {

    private AirTrafficControlMediator mediator;

    public TravelAirplane(AirTrafficControlMediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public String getType() {
        return "Travel";
    }

    @Override
    public void requestTakeoff() {
        mediator.requestTakeOff(this);
    }

    @Override
    public void requestLanding() {
        mediator.requestLanding(this);
    }

    @Override
    public void notifyAirTrafficControl(String message) {
        System.out.println("Travel Airplane: " + message);
    }
}
