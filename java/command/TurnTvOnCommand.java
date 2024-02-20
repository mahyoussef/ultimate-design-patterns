package command;

public class TurnTvOnCommand implements Command {
    private final Tv tv;

    public TurnTvOnCommand(Tv tv) {
        this.tv = tv;
    }

    @Override
    public void execute() {
        tv.turnOn();
    }
}
