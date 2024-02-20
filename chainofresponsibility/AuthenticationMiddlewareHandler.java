package chainofresponsibility;

public class AuthenticationMiddlewareHandler extends AbstractMiddlewareHandler {

    @Override
    public boolean handle(Request request) {
        System.out.println("Checking if request is Authenticated...");
        if (!request.isAuthenticated()) {
            System.out.println("request is not authenticated");
            return false;
        }
        return super.handle(request);
    }
}
