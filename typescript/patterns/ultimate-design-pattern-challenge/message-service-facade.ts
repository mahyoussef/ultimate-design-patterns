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
