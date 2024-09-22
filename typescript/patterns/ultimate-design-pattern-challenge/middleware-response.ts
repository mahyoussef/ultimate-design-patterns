class MiddlewareResponse {
  private message: string;
  private hasSucceeded: boolean;

  constructor(message: string, hasSucceeded: boolean) {
    this.message = message;
    this.hasSucceeded = hasSucceeded;
  }

  getMessage(): string {
    return this.message;
  }

  getHasSucceeded(): boolean {
    return this.hasSucceeded;
  }
}
