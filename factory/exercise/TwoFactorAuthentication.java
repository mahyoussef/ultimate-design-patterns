package factory.exercise;

public class TwoFactorAuthentication implements Authentication {
    @Override
    public void authenticate() {
        System.out.println("Performing two-factor authentication.");
    }
}
