package command.exercise;

public class CopyCommand implements TextOperationCommand {
    private String textToCopy;

    public CopyCommand(String textToCopy) {
        this.textToCopy = textToCopy;
    }

    @Override
    public void execute() {
        System.out.println("Copying text into clipboard...");
    }
}
