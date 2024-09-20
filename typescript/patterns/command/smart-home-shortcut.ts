class SmartHomeShortcut {
  private commands: Map<string, Command>;
  constructor() {
    this.commands = new Map<string, Command>();
  }

  openShortcut(shortcut: string): void {
    this.commands.get(shortcut)?.execute();
  }

  setCommand(shortcutCommand: string, command: Command): void {
    this.commands.set(shortcutCommand, command);
  }
}
