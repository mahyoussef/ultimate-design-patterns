package command.exercise;

public class DeleteCommand implements TextOperationCommand {
    private String textToDelete;

    public DeleteCommand(String textToDelete) {
        this.textToDelete = textToDelete;
    }

    @Override
    public void execute() {
        System.out.println("Deleting text...");
    }
}
