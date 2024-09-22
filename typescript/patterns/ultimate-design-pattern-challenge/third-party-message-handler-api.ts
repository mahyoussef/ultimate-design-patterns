class ThirdPartyMessageHandlerApi {
  processMessage(messageToProcess: string): string {
    console.log("Processing message through third-party service...");
    return messageToProcess + " is answer successfully";
  }
}
