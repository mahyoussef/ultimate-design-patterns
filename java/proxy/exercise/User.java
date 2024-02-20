package proxy.exercise;

public class User {
    private String username;

    public User(String username) {
        this.username = username;
    }

    public boolean hasPermission(String videoId) {
        return true;
    }

    public String getUsername() {
        return username;
    }
}
