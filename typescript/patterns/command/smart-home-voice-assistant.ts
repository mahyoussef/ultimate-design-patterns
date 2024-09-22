class SmartHomeVoiceAssistant {
  private commands: Map<string, Command>;

  constructor() {
    this.commands = new Map<string, Command>();
  }

  say(talkingCommand: string): void {
    this.commands.get(talkingCommand)?.execute();
  }

  setCommand(talkingCommand: string, command: Command): void {
    this.commands.set(talkingCommand, command);
  }
}
