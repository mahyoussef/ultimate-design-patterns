export class User {
  constructor(private readonly email: string, private mobile: string) {}

  getEmail() {
    return this.email;
  }

  getMobile() {
    return this.mobile;
  }
}
