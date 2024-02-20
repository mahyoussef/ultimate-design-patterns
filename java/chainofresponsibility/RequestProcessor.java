package chainofresponsibility;

public class RequestProcessor {

    private final MiddlewareHandler middlewareChainHandler;

    public RequestProcessor(MiddlewareHandler middlewareChainHandler) {
        this.middlewareChainHandler = middlewareChainHandler;
    }

    public Response processRequest(Request request) {
        if (!middlewareChainHandler.handle(request)) {
            return new Response("Request failed!", false);
        }
        System.out.println("processing request");
        return new Response("Request Successfully Processed", true);
    }
}
