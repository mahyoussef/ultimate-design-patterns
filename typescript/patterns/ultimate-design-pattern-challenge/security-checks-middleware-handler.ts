class SecurityChecksMiddlewareHandler extends AbstractMiddlewareHandler {
  override handle(request: HttpRequest): MiddlewareResponse {
    if (!request.getUser().getHasPassedSecurityChecks()) {
      return new MiddlewareResponse(
        "Request has failed to pass security checks",
        false,
      );
    }

    return super.handle(request);
  }
}
