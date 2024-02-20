package command;

public class LockDoorCommand implements Command {
    private final Door door;

    public LockDoorCommand(Door door) {
        this.door = door;
    }

    @Override
    public void execute() {
        door.lock();
    }
}
