package factory.exercise;

public class SocialMediaAuthentication implements Authentication {
    @Override
    public void authenticate() {
        System.out.println("Performing social media authentication.");
    }
}
