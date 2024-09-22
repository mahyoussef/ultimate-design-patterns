class MessageController {
  private middlewareHandler: MiddlewareHandler;
  private messageService: MessageServiceFacade;

  constructor(
    middlewareChainHandler: MiddlewareHandler,
    messageService: MessageServiceFacade,
  ) {
    this.middlewareHandler = middlewareChainHandler;
    this.messageService = messageService;
  }

  processMessage(request: HttpRequest): HttpResponse {
    // set of middlewares -> chain of middlewares
    const middlewareHandlerResponse = this.middlewareHandler.handle(request);
    if (!middlewareHandlerResponse.getHasSucceeded()) {
      Logger.getInstance().logWarn("Request has failed to pass middlewares...");

      return new HttpResponseBuilder()
        .setErrorMessage(
          "Request failed because: " + middlewareHandlerResponse.getMessage(),
        )
        .setHasErrors(true)
        .setStatusCode(401)
        .setHeaders(new Map().set("Content-Type", "application/json"))
        .setResponseBody("Request failed to proceed")
        .build();
    }

    const messageHandlerResponse = this.messageService.handle(
      request.getMessage(),
    );
    Logger.getInstance().logInfo(
      "Request has passed all middlewares to process: " + request.getMessage(),
    );

    return new HttpResponseBuilder()
      .setHasErrors(false)
      .setStatusCode(200)
      .setHeaders(new Map().set("Content-Type", "application/json"))
      .setResponseBody(messageHandlerResponse)
      .build();
  }
}
