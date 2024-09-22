class User {
  private username: string;
  private isAuthenticated: boolean;
  private isAuthorized: boolean;
  private hasPassedSecurityChecks: boolean;

  constructor(
    username: string,
    isAuthenticated: boolean,
    isAuthorized: boolean,
    hasPassedSecurityChecks: boolean,
  ) {
    this.username = username;
    this.isAuthenticated = isAuthenticated;
    this.isAuthorized = isAuthorized;
    this.hasPassedSecurityChecks = hasPassedSecurityChecks;
  }

  getUsername(): string {
    return this.username;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getIsAuthorized(): boolean {
    return this.isAuthorized;
  }

  getHasPassedSecurityChecks(): boolean {
    return this.hasPassedSecurityChecks;
  }
}
