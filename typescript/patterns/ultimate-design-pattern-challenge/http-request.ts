class HttpRequest {
  private message: string;
  private user: User;

  constructor(message: string, user: User) {
    this.message = message;
    this.user = user;
  }

  getMessage(): string {
    return this.message;
  }

  getUser(): User {
    return this.user;
  }
}
