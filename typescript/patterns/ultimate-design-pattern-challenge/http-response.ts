class HttpResponse {
  private statusCode: number;
  private responseBody: string;
  private headers: Map<string, string>;
  private hasErrors: boolean;
  private errorMessage: string;

  private constructor(
    statusCode: number,
    responseBody: string,
    hasErrors: boolean,
    errorMessage: string,
    headers: Map<string, string>,
  ) {
    this.statusCode = statusCode;
    this.responseBody = responseBody;
    this.headers = headers;
    this.hasErrors = hasErrors;
    this.errorMessage = errorMessage;
  }

  static getInstance(
    statusCode: number,
    responseBody: string,
    hasError: boolean,
    errorMessage: string,
    headers: Map<string, string>,
  ): HttpResponse {
    return new HttpResponse(
      statusCode,
      responseBody,
      hasError,
      errorMessage,
      headers,
    );
  }

  getStatusCode(): number {
    return this.statusCode;
  }

  getResponseBody(): string {
    return this.responseBody;
  }

  getHeaders(): Map<string, string> {
    return this.headers;
  }

  isHasErrors(): boolean {
    return this.hasErrors;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }

  setStatusCode(statusCode: number): void {
    this.statusCode = statusCode;
  }

  setBody(body: string): void {
    this.responseBody = body;
  }

  setHasError(hasError: boolean): void {
    this.hasErrors = hasError;
  }

  setErrorMessage(errorMessage: string): void {
    this.errorMessage = errorMessage;
  }

  setHeaders(headers: Map<string, string>): void {
    this.headers = headers;
  }
}
