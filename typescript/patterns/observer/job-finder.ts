import { Subscriber } from "./subscriber";

export class JobFinder implements Subscriber {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  notify(message: string) {
    console.log(
      `${this.name} is receiving a notification about job finding: ${message}`
    );
  }
}
