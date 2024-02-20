package ultimate;

import java.util.HashMap;
import java.util.Map;

public class MessageHandlerCachingProxy implements MessageHandlerProxy {

    private ThirdPartyMessageHandlerApi thirdPartyMessageHandlerApi;

    private Map<String, String> cache;
    public MessageHandlerCachingProxy(ThirdPartyMessageHandlerApi thirdPartyMessageHandlerApi) {
        this.thirdPartyMessageHandlerApi = thirdPartyMessageHandlerApi;
        this.cache = new HashMap<>();
    }

    public String processMessage(String message) {
        if (!cache.containsKey(message)) {
            cache.put(message, thirdPartyMessageHandlerApi.processMessage(message));
            return cache.get(message);
        }
        Logger.getInstance().logInfo("Getting result from the proxy cache...");
        return cache.get(message);
    }
}
