class Door {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  lock(): void {
    console.log(`Locking Door ${this.name}...`);
  }

  unlock(): void {
    console.log(`Unlocking Door ${this.name}...`);
  }

  getName(): string {
    return this.name;
  }
}
