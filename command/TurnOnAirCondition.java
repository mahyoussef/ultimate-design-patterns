package command;

public class TurnOnAirCondition implements Command {
    private final AirCondition airCondition;

    public TurnOnAirCondition(AirCondition airCondition) {
        this.airCondition = airCondition;
    }

    @Override
    public void execute() {
        airCondition.turnOn();
    }
}
