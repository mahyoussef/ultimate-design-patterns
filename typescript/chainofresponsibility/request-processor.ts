import {MiddlewareHandler} from "./middleware-handler";
import {ChainRequest} from "./request";
import {ChainResponseT} from "./response";

export class RequestProcessor {
  private middlewareHandler: MiddlewareHandler;
  constructor(middlewareChainHandler: MiddlewareHandler) {
    this.middlewareHandler = middlewareChainHandler;
  }

  public processRequest(request: ChainRequest): ChainResponseT {
    if (!this.middlewareHandler.handle(request)) {
      return {
        reason: "Request is not processed.",
        isSucceeded: false,
      };
    } else
      return {
        reason: "Request is processed successfully.",
        isSucceeded: true,
      };
  }
}
