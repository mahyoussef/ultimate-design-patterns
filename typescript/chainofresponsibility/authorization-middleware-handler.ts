import {AbstractMiddlewareHandler} from "./abstractMiddleware-handler";
import {ChainRequest} from "./request";

export class AuthorizationMiddlewareHandler extends AbstractMiddlewareHandler {
  public handle(request: ChainRequest): boolean {
    if (!request.isAuthorized) {
      console.log("AuthorizationMiddlewareHandler: User is not authorized.");
      return false;
    }
    console.log("AuthorizationMiddlewareHandler: User is authorized.");

    return super.handle(request);
  }
}
