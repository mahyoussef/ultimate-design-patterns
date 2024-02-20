package ultimate;

public class HttpRequest {

    private String message;
    private User user;

    public HttpRequest(User user, String message) {
        this.user = user;
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public User getUser() {
        return user;
    }
}
