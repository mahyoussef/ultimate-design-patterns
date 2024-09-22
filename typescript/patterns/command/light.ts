class Light {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  turnOn(): void {
    console.log(`Turning on Light ${this.name}...`);
  }

  turnOff(): void {
    console.log(`Turning off Light ${this.name}...`);
  }

  getName(): string {
    return this.name;
  }
}
