import {ChainRequest} from "./request";

export interface MiddlewareHandler {
  setNext(handler: MiddlewareHandler): MiddlewareHandler;
  handle(request: ChainRequest): boolean;
}
