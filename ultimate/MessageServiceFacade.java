package ultimate;

public class MessageServiceFacade {

    private MessageHandlerCachingProxy messageHandlerCachingProxy;
    private MessageRepository messageRepository;
    private MessageAnalyzeService messageAnalyzeService;
    public MessageServiceFacade(MessageHandlerCachingProxy messageHandlerCachingProxy,
                                MessageRepository messageRepository, MessageAnalyzeService messageAnalyzeService) {
        this.messageHandlerCachingProxy = messageHandlerCachingProxy;
        this.messageRepository = messageRepository;
        this.messageAnalyzeService = messageAnalyzeService;
    }

    public String handle(String messageToHandle) {
        messageAnalyzeService.analyzeUnFormattedMessage(messageToHandle);
        Logger.getInstance().logInfo("Fetching the message formatter...");
        MessageFormatter messageFormatter = MessageFormatterFactory.getMessageFormatterInstance(messageToHandle);
        String formattedMessage = messageFormatter.formatMessage(messageToHandle);
        Logger.getInstance().logInfo("Message is formatted successfully with: " + messageFormatter.getType());
        messageAnalyzeService.analyzeFormattedMessage(messageToHandle);
        messageRepository.save(formattedMessage);
        return messageHandlerCachingProxy.processMessage(formattedMessage);
    }
}
