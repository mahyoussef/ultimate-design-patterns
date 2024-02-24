import { Subscriber } from "./subscriber";

export class Customer implements Subscriber {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  notify(message: string) {
    console.log(`Notifying user: ${this.name} about: ${message}`);
  }
}
