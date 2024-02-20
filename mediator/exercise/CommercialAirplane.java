package mediator.exercise;

public class CommercialAirplane implements Airplane {
    private AirTrafficControlMediator mediator;

    public CommercialAirplane(AirTrafficControlMediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public String getType() {
        return "Commercial";
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
        System.out.println("Commercial Airplane: " + message);
    }
}
