package chainofresponsibility;

import ultimate.HttpRequest;
import ultimate.MiddlewareResponse;

public interface MiddlewareHandler {
    MiddlewareHandler setNext(MiddlewareHandler middlewareHandler);
    MiddlewareResponse handle(HttpRequest request);
}
