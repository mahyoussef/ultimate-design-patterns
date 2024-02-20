package command;

import java.util.HashMap;
import java.util.Map;

public class VoiceAssistant {
    private final Map<String, Command> commands;

    public VoiceAssistant() {
        this.commands = new HashMap<>();
    }

    public void setCommand(String talkingCommand, Command command) {
        commands.put(talkingCommand, command);
    }

    public void say(String talkingCommand) {
        commands.get(talkingCommand).execute();
    }
}
