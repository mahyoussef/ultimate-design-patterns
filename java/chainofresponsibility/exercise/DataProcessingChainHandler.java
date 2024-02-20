package chainofresponsibility.exercise;

public interface DataProcessingChainHandler {

    DataProcessingChainHandler setNext(DataProcessingChainHandler dataProcessingChainHandler);
    DataProcessingResponse handle(Data data);
}
