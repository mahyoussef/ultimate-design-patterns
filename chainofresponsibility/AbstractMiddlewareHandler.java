package chainofresponsibility;

import ultimate.HttpRequest;
import ultimate.MiddlewareResponse;

public class AbstractMiddlewareHandler implements MiddlewareHandler {
    private MiddlewareHandler nextHandler;
    @Override
    public MiddlewareHandler setNext(MiddlewareHandler middlewareHandler) {
        nextHandler = middlewareHandler;
        return  middlewareHandler;
    }

    @Override
    public MiddlewareResponse handle(HttpRequest request) {
        if (nextHandler != null) {
            return nextHandler.handle(request);
        }
        return new MiddlewareResponse("Request has passed all checks successfully", true);
    }
}
