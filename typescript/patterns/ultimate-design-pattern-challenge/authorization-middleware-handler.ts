class AuthorizationMiddlewareHandler extends AbstractMiddlewareHandler {
  override handle(request: HttpRequest): MiddlewareResponse {
    if (!request.getUser().getIsAuthorized()) {
      return new MiddlewareResponse(
        "Request has failed to be authorized",
        false,
      );
    }

    return super.handle(request);
  }
}
