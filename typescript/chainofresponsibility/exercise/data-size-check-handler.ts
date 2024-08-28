import {AbstractDataProcessingHandler} from "./abstract-data-processing-handler";
import {Data} from "./data";
import {DataProcessingResponse} from "./data-processing-response";

export class DataSizeChecksHandler extends AbstractDataProcessingHandler {
  public handle(data: Data): DataProcessingResponse {
    console.log("Doing data-size checks on data...");
    if (!data.isHasPassedValidationChecks) {
      return {reason: "Failed data-size checks", isSucceeded: false};
    }
    console.log("Passed data-size checks.");
    return super.handle(data);
  }
}
