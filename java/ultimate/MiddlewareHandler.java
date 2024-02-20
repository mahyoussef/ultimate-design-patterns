package ultimate;

public interface MiddlewareHandler {

    MiddlewareHandler setNext(MiddlewareHandler middlewareHandler);
    MiddlewareResponse handle(HttpRequest request);
}
