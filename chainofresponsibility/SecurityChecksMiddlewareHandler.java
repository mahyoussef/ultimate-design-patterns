package chainofresponsibility;

public class SecurityChecksMiddlewareHandler extends AbstractMiddlewareHandler {

    @Override
    public boolean handle(Request request){
        System.out.println("Checking if request pass security checks...");
        if (!request.isHasPassedSecurityChecks()) {
            System.out.println("request failed to pass security checks...");
            return false;
        }
        return super.handle(request);
    }
}
