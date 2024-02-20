package ultimate;

public class User {
    private String username;
    private boolean hasPassedSecurityChecks;
    private boolean isAuthenticated;
    private boolean isAuthorized;

    public User(String username, boolean hasPassedSecurityChecks, boolean isAuthenticated, boolean isAuthorized) {
        this.username = username;
        this.hasPassedSecurityChecks = hasPassedSecurityChecks;
        this.isAuthenticated = isAuthenticated;
        this.isAuthorized = isAuthorized;
    }

    public String getUsername() {
        return username;
    }

    public boolean isHasPassedSecurityChecks() {
        return hasPassedSecurityChecks;
    }

    public boolean isAuthenticated() {
        return isAuthenticated;
    }

    public boolean isAuthorized() {
        return isAuthorized;
    }
}
