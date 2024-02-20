package chainofresponsibility.exercise;

import chainofresponsibility.MiddlewareHandler;
import chainofresponsibility.Request;

public class AbstractDataProcessingHandler implements DataProcessingChainHandler {

    private DataProcessingChainHandler nextHandler;
    @Override
    public DataProcessingChainHandler setNext(DataProcessingChainHandler dataProcessingChainHandler) {
        nextHandler = dataProcessingChainHandler;
        return dataProcessingChainHandler;
    }

    @Override
    public DataProcessingResponse handle(Data data) {
        if (nextHandler != null) {
            return nextHandler.handle(data);
        }
        return new DataProcessingResponse("Succeeded to proceed the job", true);
    }
}
