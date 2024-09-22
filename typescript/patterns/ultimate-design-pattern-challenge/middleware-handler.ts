interface MiddlewareHandler {
  setNext(middlewareHandler: MiddlewareHandler): MiddlewareHandler;
  handle(request: HttpRequest): MiddlewareResponse;
}
