class User {
  private username: string;

  constructor(username: string) {
    this.username = username;
  }

  hasPermission(videoId: string): boolean {
    return true;
  }

  getUsername(): string {
    return this.username;
  }
}
