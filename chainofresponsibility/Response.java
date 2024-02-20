package chainofresponsibility;

public class Response {
    private String reason;
    private boolean isSucceeded;

    public Response(String reason, boolean isSucceeded) {
        this.reason = reason;
        this.isSucceeded = isSucceeded;
    }

    public String getReason() {
        return reason;
    }

    public boolean isSucceeded() {
        return isSucceeded;
    }
}
