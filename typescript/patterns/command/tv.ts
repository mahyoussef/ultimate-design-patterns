class Tv {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  turnOn(): void {
    console.log(`Turning on TV ${this.name}...`);
  }

  turnOff(): void {
    console.log(`Turning off TV ${this.name}...`);
  }

  getName(): string {
    return this.name;
  }
}
