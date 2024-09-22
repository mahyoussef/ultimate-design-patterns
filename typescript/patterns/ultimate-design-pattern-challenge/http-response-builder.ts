class HttpResponseBuilder {
  private statusCode!: number;
  private responseBody!: string;
  private headers!: Map<string, string>;
  private hasErrors!: boolean;
  private errorMessage!: string;

  setErrorMessage(errorMessage: string): HttpResponseBuilder {
    this.errorMessage = errorMessage;
    return this;
  }

  setStatusCode(statusCode: number): HttpResponseBuilder {
    this.statusCode = statusCode;
    return this;
  }

  setResponseBody(body: string): HttpResponseBuilder {
    this.responseBody = body;
    return this;
  }

  setHasErrors(hasError: boolean): HttpResponseBuilder {
    this.hasErrors = hasError;
    return this;
  }

  setHeaders(headers: Map<string, string>): HttpResponseBuilder {
    this.headers = headers;
    return this;
  }

  build(): HttpResponse {
    if (!this.statusCode) throw new Error("Status code is required");
    if (!this.responseBody) throw new Error("Response body is required");

    return HttpResponse.getInstance(
      this.statusCode,
      this.responseBody,
      this.hasErrors,
      this.errorMessage,
      this.headers,
    );
  }
}
