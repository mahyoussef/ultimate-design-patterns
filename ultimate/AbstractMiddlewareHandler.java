package ultimate;

public class AbstractMiddlewareHandler implements MiddlewareHandler {

    private MiddlewareHandler next;

    @Override
    public MiddlewareHandler setNext(MiddlewareHandler middlewareHandler) {
        next = middlewareHandler;
        return next;
    }

    @Override
    public MiddlewareResponse handle(HttpRequest request) {
        if (next != null) {
            next.handle(request);
        }
        return new MiddlewareResponse("Request successfully passed all middlewares", true);
    }
}
