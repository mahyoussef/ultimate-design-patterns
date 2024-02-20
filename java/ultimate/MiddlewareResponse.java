package ultimate;

public class MiddlewareResponse {

    private String message;
    private boolean hasSucceeded;

    public MiddlewareResponse(String message, boolean hasSucceeded) {
        this.message = message;
        this.hasSucceeded = hasSucceeded;
    }

    public String getMessage() {
        return message;
    }

    public boolean isHasSucceeded() {
        return hasSucceeded;
    }
}
