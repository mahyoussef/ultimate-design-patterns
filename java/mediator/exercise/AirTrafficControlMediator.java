package mediator.exercise;

public interface AirTrafficControlMediator {
    void requestTakeOff(Airplane airplane);
    void requestLanding(Airplane airplane);
    void register(Airplane airplane);
}
