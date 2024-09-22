import {AbstractDataProcessingHandler} from "./abstract-data-processing-handler";
import {Data} from "./data";
import {DataProcessingResponse} from "./data-processing-response";

export class PersonalInformationChecksHandler extends AbstractDataProcessingHandler {
  public handle(data: Data): DataProcessingResponse {
    console.log("Doing personal-information checks on data...");
    if (!data.isHasPassedValidationChecks) {
      return {reason: "Failed personal-information checks", isSucceeded: false};
    }
    console.log("Passed personal-information checks.");
    return super.handle(data);
  }
}
