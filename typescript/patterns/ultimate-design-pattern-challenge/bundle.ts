/**
 * We need to implement a Message Controller that takes a HttpRequest and includes User and Message info and returns a HttpResponse.
 * The Message needs to be validated across (authentication, authorization, and security checks).
 * The Message needs to be handled through formatting, analyzing, saving formatted message in the database and calling third-party service to process it.
 * We proceed the message and handle it if it passes all validations, the ,message formatting goes through a set of defined rules: validation, check size, and format.
 */

// ###########################################
// MiddlewareHandler | Chain of Responsibility
// ###########################################
interface MiddlewareHandler {
  setNext(middlewareHandler: MiddlewareHandler): MiddlewareHandler;
  handle(request: HttpRequest): MiddlewareResponse;
}

class MiddlewareResponse {
  private message: string;
  private hasSucceeded: boolean;

  constructor(message: string, hasSucceeded: boolean) {
    this.message = message;
    this.hasSucceeded = hasSucceeded;
  }

  getMessage(): string {
    return this.message;
  }

  getHasSucceeded(): boolean {
    return this.hasSucceeded;
  }
}

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

// #########################################################
// Message Formatting | Factory, Strategy, Template patterns
// #########################################################
interface MessageFormatter {
  formatMessage(messageToFormat: string): string;
  getType(): string;
}

abstract class AbstractMessageFormatter implements MessageFormatter {
  formatMessage(messageToFormat: string): string {
    this.validateMessage(messageToFormat);
    this.checkMessageSize(messageToFormat);
    return this.format(messageToFormat);
  }

  private validateMessage(messageToValidate: string): void {
    console.log("Validating message...");
  }

  private checkMessageSize(messageToCheck: string): void {
    console.log("Checking message size...");
  }

  protected abstract format(messageToFormat: string): string;

  abstract getType(): string;
}

class JsonMessageFormatter extends AbstractMessageFormatter {
  override format(messageToFormat: string): string {
    return messageToFormat + " json formatted";
  }

  override getType(): string {
    return "JSON_TYPE";
  }
}

class XmlMessageFormatter extends AbstractMessageFormatter {
  override format(messageToFormat: string): string {
    return messageToFormat + " xml formatted";
  }

  override getType(): string {
    return "XML_TYPE";
  }
}

class PlainTextMessageFormatter extends AbstractMessageFormatter {
  override format(messageToFormat: string): string {
    return messageToFormat + " formatted as plain text";
  }

  override getType(): string {
    return "PLAIN_TEXT_TYPE";
  }
}

class MessageFormatterFactory {
  private constructor() {}

  static getMessageFormatterInstance(
    messageToFormat: string,
  ): MessageFormatter {
    console.log("messageToFormat: " + messageToFormat);

    switch (messageToFormat.toLocaleLowerCase()) {
      case "json":
        return new JsonMessageFormatter();

      case "xml":
        return new XmlMessageFormatter();

      case "plain_text":
        return new PlainTextMessageFormatter();

      default:
        throw new Error("failed to format this type of message");
    }
  }
}

// ###################################
// Message Processing | Facade Pattern
// ###################################
class MessageAnalyzeService {
  analyzeUnFormattedMessage(messageToAnalyze: string): void {
    console.log("Analyzing un-formatted message..." + messageToAnalyze);
  }

  analyzeFormattedMessage(messageToAnalyze: string): void {
    console.log("Analyzing formatted message..." + messageToAnalyze);
  }
}

interface MessageRepository {
  save(formattedMessage: string): void;
}

class MongoDbMessageRepository implements MessageRepository {
  save(formattedMessage: string): void {
    console.log(`Saving data: ${formattedMessage} in mongo database...`);
  }
}

class MessageServiceFacade {
  private messageHandlerCachingProxy: MessageHandlerCachingProxy;
  private messageRepository: MessageRepository;
  private messageAnalyzeService: MessageAnalyzeService;

  constructor(
    messageAnalyzeService: MessageAnalyzeService,
    messageRepository: MessageRepository,
    messageHandlerCachingProxy: MessageHandlerCachingProxy,
  ) {
    this.messageAnalyzeService = messageAnalyzeService;
    this.messageRepository = messageRepository;
    this.messageHandlerCachingProxy = messageHandlerCachingProxy;
  }

  handle(messageToHandle: string): string {
    Logger.getInstance().logInfo("Analyzing un-formatted message...");
    this.messageAnalyzeService.analyzeUnFormattedMessage(messageToHandle);

    Logger.getInstance().logInfo("Fetching the message formatter...");
    const messageFormatter =
      MessageFormatterFactory.getMessageFormatterInstance(messageToHandle);

    Logger.getInstance().logInfo(
      `Message is formatted successfully with: ${messageFormatter.getType()}`,
    );
    const formattedMessage = messageFormatter.formatMessage(messageToHandle);

    Logger.getInstance().logInfo("Analyzing formatted message...");
    this.messageAnalyzeService.analyzeFormattedMessage(formattedMessage);

    Logger.getInstance().logInfo("Saving formatted message into database...");
    this.messageRepository.save(formattedMessage);

    Logger.getInstance().logInfo("Processing message through caching...");
    return this.messageHandlerCachingProxy.processMessage(formattedMessage);
  }
}

// ###############################
// Message Caching | Proxy pattern
// ###############################
interface MessageHandlerProxy {
  processMessage(messageToProcess: string): string;
}

class MessageHandlerCachingProxy implements MessageHandlerProxy {
  private thirdPartyMessageHandlerApi: ThirdPartyMessageHandlerApi;
  private cache: Map<string, string>;

  constructor(thirdPartyMessageHandlingService: ThirdPartyMessageHandlerApi) {
    this.thirdPartyMessageHandlerApi = thirdPartyMessageHandlingService;
    this.cache = new Map();
  }

  processMessage(messageToProcess: string): string {
    if (!this.cache.has(messageToProcess)) {
      Logger.getInstance().logInfo("Saving message to the proxy cache...");

      const processedMessage =
        this.thirdPartyMessageHandlerApi.processMessage(messageToProcess);
      this.cache.set(messageToProcess, processedMessage);

      return this.cache.get(messageToProcess)!;
    }

    Logger.getInstance().logInfo("Getting result from the proxy cache...");
    return this.cache.get(messageToProcess)!;
  }
}

class ThirdPartyMessageHandlerApi {
  processMessage(messageToProcess: string): string {
    console.log("Processing message through third-party service...");
    return messageToProcess + " is answer successfully";
  }
}

// ##################################
// Request/Response | Builder Pattern
// ##################################
class HttpRequest {
  private message: string;
  private user: User;

  constructor(message: string, user: User) {
    this.message = message;
    this.user = user;
  }

  getMessage(): string {
    return this.message;
  }

  getUser(): User {
    return this.user;
  }
}

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

// ###################
// Logging | Singleton
// ###################
enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

class Logger {
  private logLevel: LogLevel = LogLevel.INFO;
  private static instance: Logger;
  private constructor() {}

  static getInstance(): Logger {
    if (!this.instance) {
      this.instance = new Logger();
    }
    return this.instance;
  }

  setLogLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  logDebug(message: string) {
    if (this.logLevel <= LogLevel.DEBUG) {
      console.log(message);
    }
  }
  logInfo(message: string) {
    if (this.logLevel <= LogLevel.INFO) {
      console.log(message);
    }
  }
  logError(message: string) {
    if (this.logLevel <= LogLevel.ERROR) {
      console.log(message);
    }
  }
  logWarn(message: string) {
    if (this.logLevel <= LogLevel.WARN) {
      console.log(message);
    }
  }
}

// ##################
// Message Controller
// ##################
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

// ####
// User
// ####
class User {
  private username: string;
  private isAuthenticated: boolean;
  private isAuthorized: boolean;
  private hasPassedSecurityChecks: boolean;

  constructor(
    username: string,
    isAuthenticated: boolean,
    isAuthorized: boolean,
    hasPassedSecurityChecks: boolean,
  ) {
    this.username = username;
    this.isAuthenticated = isAuthenticated;
    this.isAuthorized = isAuthorized;
    this.hasPassedSecurityChecks = hasPassedSecurityChecks;
  }

  getUsername(): string {
    return this.username;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getIsAuthorized(): boolean {
    return this.isAuthorized;
  }

  getHasPassedSecurityChecks(): boolean {
    return this.hasPassedSecurityChecks;
  }
}

// #############
// Example usage
// #############
const user = new User("ahmed", true, true, true);
const request = new HttpRequest("json", user);

// Middleware chain setup
const authMiddleware = new AuthenticationMiddlewareHandler();
const authzMiddleware = new AuthorizationMiddlewareHandler();
const securityMiddleware = new SecurityChecksMiddlewareHandler();

authMiddleware.setNext(authzMiddleware).setNext(securityMiddleware);

// Message service and proxies setup
const thirdPartyApi = new ThirdPartyMessageHandlerApi();
const cachingProxy = new MessageHandlerCachingProxy(thirdPartyApi);
const messageRepo = new MongoDbMessageRepository();
const messageAnalyze = new MessageAnalyzeService();
const messageService = new MessageServiceFacade(
  messageAnalyze,
  messageRepo,
  cachingProxy,
);

// Message controller setup
const messageController = new MessageController(authMiddleware, messageService);

// Process request
const response = messageController.processMessage(request);

console.log(response.getResponseBody());
