class TurnOffLightCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.turnOff();
  }
}
