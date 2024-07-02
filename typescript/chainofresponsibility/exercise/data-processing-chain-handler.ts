import {Data} from "./data";
import {DataProcessingResponse} from "./data-processing-response";

export interface DataProcessingChainHandler {
  setNext(
    dataProcessingChainHandler: DataProcessingChainHandler
  ): DataProcessingChainHandler;
  handle(data: Data): DataProcessingResponse;
}
