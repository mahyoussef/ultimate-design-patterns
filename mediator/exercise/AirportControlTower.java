package mediator.exercise;

import java.util.ArrayList;
import java.util.List;

public class AirportControlTower implements AirTrafficControlMediator {

    private List<Airplane> airplanes;

    public AirportControlTower() {
        this.airplanes = new ArrayList<>();
    }

    @Override
    public void requestTakeOff(Airplane airplane) {
        airplanes.forEach(otherAirplanes -> otherAirplanes.notifyAirTrafficControl("the following airplane: "
                + airplane.getType() + " is taking off..."));
        airplane.notifyAirTrafficControl("Requesting takeoff accepted...");
    }

    @Override
    public void requestLanding(Airplane airplane) {
        airplanes.forEach(otherAirplanes -> otherAirplanes.notifyAirTrafficControl("the following airplane: "
                + airplane.getType() + " is landing..."));
        airplane.notifyAirTrafficControl("Requesting landing accepted...");
    }

    @Override
    public void register(Airplane airplane) {
        airplanes.add(airplane);
    }

}
