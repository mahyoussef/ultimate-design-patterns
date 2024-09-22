class AuthenticationMiddlewareHandler extends AbstractMiddlewareHandler {
  override handle(request: HttpRequest): MiddlewareResponse {
    if (!request.getUser().getIsAuthenticated()) {
      return new MiddlewareResponse(
        "Request has failed to be authenticated",
        false,
      );
    }

    return super.handle(request);
  }
}
