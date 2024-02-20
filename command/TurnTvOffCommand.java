package command;

public class TurnTvOffCommand implements Command {
    private final Tv tv;

    public TurnTvOffCommand(Tv tv) {
        this.tv = tv;
    }

    @Override
    public void execute() {
        tv.turnOff();
    }
}
