import {MiddlewareHandler} from "./middleware-handler";
import {ChainRequest} from "./request";

export abstract class AbstractMiddlewareHandler implements MiddlewareHandler {
  private nextHandler: MiddlewareHandler;
  constructor() {
    this.nextHandler = {
      setNext: () => this,
      handle: () => true,
    };
  }

  public setNext(handler: MiddlewareHandler): MiddlewareHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: ChainRequest): boolean {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return true;
  }
}
