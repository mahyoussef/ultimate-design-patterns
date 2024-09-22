class TurnOnLightCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.turnOn();
  }
}
