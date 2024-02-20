package ultimate;

import java.util.Map;

public class MessageController {

    private MiddlewareHandler middlewareHandler;
    private MessageServiceFacade messageService;

    public MessageController(MiddlewareHandler middlewareHandler, MessageServiceFacade messageService) {
        this.middlewareHandler = middlewareHandler;
        this.messageService = messageService;
    }

    public HttpResponse processMessage(HttpRequest request) {
        MiddlewareResponse middlewareResponse = middlewareHandler.handle(request);
        if (!middlewareResponse.isHasSucceeded()) {
            Logger.getInstance().logWarn("Request has failed to pass middlewares...");
            return new HttpResponse.HttpResponseBuilder()
                    .setHasErrorMessage("Request failed because: " + middlewareResponse.getMessage())
                    .setHasErrors(true)
                    .setStatusCode(400)
                    .setHeaders(Map.of("content-type", "application/json"))
                    .setResponseBody("Request failed to proceed")
                    .build();
        }
        String messageHandlerResponse = messageService.handle(request.getMessage());
        Logger.getInstance().logInfo("Request has passed all middlewares to process: " + request.getMessage());
        return new HttpResponse.HttpResponseBuilder()
                .setHasErrors(false)
                .setStatusCode(200)
                .setHeaders(Map.of("content-type", "application/json"))
                .setResponseBody(messageHandlerResponse)
                .build();
    }
}
