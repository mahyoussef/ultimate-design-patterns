package factory.exercise;

public class UsernamePasswordAuthFactory implements AuthenticationFactory {
    @Override
    public Authentication createAuthentication() {
        return new UsernamePasswordAuthentication();
    }
}
