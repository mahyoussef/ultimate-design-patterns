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
