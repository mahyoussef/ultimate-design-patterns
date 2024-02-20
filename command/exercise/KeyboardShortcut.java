package command.exercise;

import java.util.Map;

public class KeyboardShortcut {

    private Map<String, TextOperationCommand> commands;

    public void setCommand(String shortcut, TextOperationCommand command) {
        commands.put(shortcut, command);
    }

    public void click(String shortcut) {
        commands.get(shortcut).execute();
    }
}
