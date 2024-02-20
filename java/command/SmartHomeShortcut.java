package command;

import java.util.HashMap;
import java.util.Map;

public class SmartHomeShortcut {

    private final Map<String, Command> commands;

    public SmartHomeShortcut() {
        this.commands = new HashMap<>();
    }

    public void setCommand(String shortcutCommand, Command command) {
        commands.put(shortcutCommand, command);
    }

    public void openShortcut(String shortcutCommand) {
        commands.get(shortcutCommand).execute();
    }
}
