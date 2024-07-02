import {AbstractDataProcessingHandler} from "./abstract-data-processing-handler";
import {Data} from "./data";
import {DataProcessingResponse} from "./data-processing-response";

export class ValidationChecksHandler extends AbstractDataProcessingHandler {
  public handle(data: Data): DataProcessingResponse {
    console.log("Doing validation checks on data...");
    if (!data.isHasPassedValidationChecks) {
      console.log("Failed validation checks");
      return {reason: "Failed validation checks", isSucceeded: false};
    }
    console.log("Passed validation checks.");
    return super.handle(data);
  }
}
