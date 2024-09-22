export class User {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  notify(message: string) {
    console.log(`${this.name} is receiving message: ${message}`);
  }
}
