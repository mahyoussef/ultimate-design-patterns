class AbstractMiddlewareHandler implements MiddlewareHandler {
  private next: MiddlewareHandler | null = null;

  setNext(middlewareHandler: MiddlewareHandler): MiddlewareHandler {
    this.next = middlewareHandler;
    return this.next;
  }

  handle(request: HttpRequest): MiddlewareResponse {
    if (!this.next) {
      return new MiddlewareResponse(
        "Request successfully passed all middlewares",
        true,
      );
    }

    return this.next.handle(request);
  }
}
