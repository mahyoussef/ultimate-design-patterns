import {Data} from "./data";
import {DataProcessingChainHandler} from "./data-processing-chain-handler";
import {DataProcessingResponse} from "./data-processing-response";

export class DataProcessor {
  private dataProcessingHandler: DataProcessingChainHandler;
  constructor(dataProcessingChainHandler: DataProcessingChainHandler) {
    this.dataProcessingHandler = dataProcessingChainHandler;
  }

  public processData(data: Data): DataProcessingResponse {
    if (!this.dataProcessingHandler.handle(data)) {
      return {
        reason: "Data is not processed.",
        isSucceeded: false,
      };
    } else
      return {
        reason: "Data is processed successfully.",
        isSucceeded: true,
      };
  }
}
