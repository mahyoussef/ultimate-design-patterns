package factory.exercise;

public class UsernamePasswordAuthentication implements Authentication {
    @Override
    public void authenticate() {
        System.out.println("Performing username/password authentication.");
    }
}
