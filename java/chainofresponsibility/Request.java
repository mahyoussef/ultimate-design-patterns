package chainofresponsibility;

public class Request {

    private String type;
    private boolean isAuthenticated;
    private boolean isAuthorized;
    private boolean hasPassedSecurityChecks;

    public Request(String type, boolean isAuthenticated, boolean isAuthorized, boolean hasPassedSecurityChecks) {
        this.type = type;
        this.isAuthenticated = isAuthenticated;
        this.isAuthorized = isAuthorized;
        this.hasPassedSecurityChecks = hasPassedSecurityChecks;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isAuthenticated() {
        return isAuthenticated;
    }

    public boolean isAuthorized() {
        return isAuthorized;
    }

    public boolean isHasPassedSecurityChecks() {
        return hasPassedSecurityChecks;
    }
}
