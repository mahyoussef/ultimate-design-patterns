package ultimate;

import chainofresponsibility.AbstractMiddlewareHandler;

public class AuthenticationMiddlewareHandler extends AbstractMiddlewareHandler {

    @Override
    public MiddlewareResponse handle(HttpRequest request) {
        if (request.getUser().isAuthenticated()) {
            super.handle(request);
        }
        return new MiddlewareResponse("Request has failed to be authenticated", false);
    }
}
