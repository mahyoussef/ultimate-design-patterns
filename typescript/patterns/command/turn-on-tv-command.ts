class TurnOnTvCommand implements Command {
  private tv: Tv;
  constructor(tv: Tv) {
    this.tv = tv;
  }
  execute(): void {
    this.tv.turnOn();
  }
}