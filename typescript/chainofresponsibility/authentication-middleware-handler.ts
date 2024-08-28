import {AbstractMiddlewareHandler} from "./abstractMiddleware-handler";
import {ChainRequest} from "./request";

export class AuthenticationMiddlewareHandler extends AbstractMiddlewareHandler {
  public handle(request: ChainRequest): boolean {
    if (!request.isAuthenticated) {
      console.log(
        "AuthenticationMiddlewareHandler: User is not authenticated."
      );
      return false;
    }
    console.log("AuthenticationMiddlewareHandler: User is authenticated.");

    return super.handle(request);
  }
}
