package chainofresponsibility.exercise;

import chainofresponsibility.MiddlewareHandler;
import chainofresponsibility.Request;
import chainofresponsibility.Response;

public class DataProcessor {

    private final DataProcessingChainHandler dataProcessingChainHandler;

    public DataProcessor(DataProcessingChainHandler dataProcessingChainHandler) {
        this.dataProcessingChainHandler = dataProcessingChainHandler;
    }

    public DataProcessingResponse processData(Data data) {
        if (!dataProcessingChainHandler.handle(data).isSucceeded()) {
            return new DataProcessingResponse("Request failed!", false);
        }
        System.out.println("processing request");
        return new DataProcessingResponse("Request Successfully Processed", true);
    }
}
