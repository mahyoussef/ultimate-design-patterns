package command;

public class UnlockDoorCommand implements Command {
    private final Door door;

    public UnlockDoorCommand(Door door) {
        this.door = door;
    }

    @Override
    public void execute() {
        door.unlock();
    }
}
