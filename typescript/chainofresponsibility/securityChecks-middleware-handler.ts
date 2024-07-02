import {AbstractMiddlewareHandler} from "./abstractMiddleware-handler";
import {ChainRequest} from "./request";

export class SecurityChecksMiddlewareHandler extends AbstractMiddlewareHandler {
  public handle(request: ChainRequest): boolean {
    if (!request.isHasPassedSecurityChecks) {
      console.log("SecurityChecksMiddlewareHandler: User is not secured.");
      return false;
    }
    console.log("SecurityChecksMiddlewareHandler: User is secured.");
    return super.handle(request);
  }
}
