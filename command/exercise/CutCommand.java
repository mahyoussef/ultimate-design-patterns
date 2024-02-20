package command.exercise;

public class CutCommand implements TextOperationCommand {
    private String textToCut;

    public CutCommand(String textToCut) {
        this.textToCut = textToCut;
    }

    @Override
    public void execute() {
        System.out.println("Cutting text into clipboard...");
    }
}
