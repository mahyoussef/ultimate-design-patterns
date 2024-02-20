package chainofresponsibility;

public class AuthorizationMiddlewareHandler extends AbstractMiddlewareHandler {

    @Override
    public boolean handle(Request request) {
        System.out.println("Checking if request is authorized...");
        if (!request.isAuthorized()) {
            System.out.println("request failed to be authorized...");
            return false;
        }
        return super.handle(request);
    }
}
