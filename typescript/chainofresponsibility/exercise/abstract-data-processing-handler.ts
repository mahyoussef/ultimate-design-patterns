import {Data} from "./data";
import {DataProcessingChainHandler} from "./data-processing-chain-handler";
import {DataProcessingResponse} from "./data-processing-response";

export class AbstractDataProcessingHandler
  implements DataProcessingChainHandler
{
  private nextHandler: DataProcessingChainHandler;

  constructor() {
    this.nextHandler = {
      setNext: () => this,
      handle: () => {
        return {reason: "Succeeded to proceed the job", isSucceeded: true};
      },
    };
  }
  setNext(
    dataProcessingChainHandler: DataProcessingChainHandler
  ): DataProcessingChainHandler {
    this.nextHandler = dataProcessingChainHandler;
    return dataProcessingChainHandler;
  }

  handle(data: Data): DataProcessingResponse {
    if (this.nextHandler != null) {
      return this.nextHandler.handle(data);
    }
    return {reason: "Succeeded to proceed the job", isSucceeded: true};
  }
}
