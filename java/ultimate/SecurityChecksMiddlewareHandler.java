package ultimate;

import chainofresponsibility.AbstractMiddlewareHandler;

public class SecurityChecksMiddlewareHandler extends AbstractMiddlewareHandler {

    @Override
    public MiddlewareResponse handle(HttpRequest request) {
        if (request.getUser().isHasPassedSecurityChecks()) {
            super.handle(request);
        }
        return new MiddlewareResponse("Request has failed to pass security checks", false);
    }
}
