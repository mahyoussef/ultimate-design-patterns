package ultimate;

import chainofresponsibility.AbstractMiddlewareHandler;

public class AuthorizationMiddlewareHandler extends AbstractMiddlewareHandler {

    @Override
    public MiddlewareResponse handle(HttpRequest request) {
        if (request.getUser().isAuthorized()) {
            super.handle(request);
        }
        return new MiddlewareResponse("Request has failed to be authorized", false);
    }
}
