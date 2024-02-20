package chainofresponsibility.exercise;

import chainofresponsibility.Request;

public class ValidationChecksHandler extends AbstractDataProcessingHandler {

    @Override
    public DataProcessingResponse handle(Data data) {
        System.out.println("Doing validation checks on data...");
        if (!data.isHasPassedValidationChecks()) {
            System.out.println("request is not authenticated");
            return new DataProcessingResponse("Passed validation checks", true);
        }
        return super.handle(data);
    }
}
