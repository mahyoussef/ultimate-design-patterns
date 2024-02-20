package factory.exercise;

public class TwoFactorAuthFactory implements AuthenticationFactory {
    @Override
    public Authentication createAuthentication() {
        return new TwoFactorAuthentication();
    }
}
