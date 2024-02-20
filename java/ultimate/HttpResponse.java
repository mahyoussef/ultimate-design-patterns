package ultimate;

import java.util.Map;

public class HttpResponse {

    private int statusCode;
    private String responseBody;
    private Map<String, String> headers;
    private boolean hasErrors;
    private String errorMessage;

    private HttpResponse(int statusCode, String responseBody,
                         Map<String, String> headers, boolean hasErrors, String errorMessage) {
        this.statusCode = statusCode;
        this.responseBody = responseBody;
        this.headers = headers;

        this.hasErrors = hasErrors;
        this.errorMessage = errorMessage;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public String getResponseBody() {
        return responseBody;
    }

    public Map<String, String> getHeaders() {
        return headers;
    }

    public boolean isHasErrors() {
        return hasErrors;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public static class HttpResponseBuilder {
        private Integer statusCode;
        private String responseBody;
        private Map<String, String> headers;
        private boolean hasErrors;
        private String errorMessage;

        public HttpResponseBuilder setStatusCode(int statusCode) {
            this.statusCode = statusCode;
            return this;
        }

        public HttpResponseBuilder setResponseBody(String responseBody) {
            this.responseBody = responseBody;
            return this;
        }

        public HttpResponseBuilder setHeaders(Map<String, String> headers) {
            this.headers = headers;
            return this;
        }

        public HttpResponseBuilder setHasErrors(boolean hasErrors) {
            this.hasErrors = hasErrors;
            return this;
        }

        public HttpResponseBuilder setHasErrorMessage(String errorMessage) {
            this.errorMessage = errorMessage;
            return this;
        }

        public HttpResponse build() {
            if (responseBody == null) {
                throw new NullPointerException("Response body should not be null");
            }
            if (statusCode == null) {
                throw new NullPointerException("Status code should not be null");
            }
            return new HttpResponse(statusCode, responseBody, headers, hasErrors, errorMessage);
        }

    }

}
