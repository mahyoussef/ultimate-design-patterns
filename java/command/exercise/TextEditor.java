package command.exercise;

import java.util.Stack;

public class TextEditor {

    private Stack<TextOperationCommand> textOperationCommandsHistory;

    public void execute(TextOperationCommand command) {
        command.execute();
        textOperationCommandsHistory.push(command);
    }

}
