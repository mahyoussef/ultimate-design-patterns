package mediator.exercise;

public interface Airplane {

    String getType();
    void requestTakeoff();
    void requestLanding();
    void notifyAirTrafficControl(String message);
}
